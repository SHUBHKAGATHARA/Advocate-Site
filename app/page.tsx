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
      color: "from-rose-500 to-red-600",
      link: "/services#criminal"
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Civil Litigation",
      description: "Comprehensive civil litigation services for disputes and personal injury cases.",
      color: "from-blue-500 to-indigo-600",
      link: "/services#civil"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Family Law",
      description: "Compassionate legal guidance through family matters and divorce proceedings.",
      color: "from-emerald-500 to-teal-600",
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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Premium Particle Background */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

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
        
        {/* Animated Background Elements - Premium Enhancement */}
        <div className="absolute inset-0 z-1">
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-amber-300/5 to-orange-400/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-r from-orange-400/5 to-amber-500/5 rounded-full blur-2xl"
          />
        </div>

        {/* Hero Content with Premium Glass Effect */}
        <motion.div
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
        >
          {/* Glass Morphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-slate-900/20 to-black/20 backdrop-blur-sm rounded-3xl border border-amber-400/10 shadow-2xl" />
          
          <div className="relative z-10">
          {/* Premium Badge with Shimmer Effect */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-full glass-morphism premium-shadow mb-8"
          >
            <motion.span 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mr-2 text-lg"
            >
              ⚖️
            </motion.span>
            <span className="text-gradient text-sm font-bold tracking-wide uppercase">
              Leading Legal Excellence
            </span>
            <div className="absolute inset-0 shimmer rounded-full" />
          </motion.div>

          {/* Main Heading with Premium Typography */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight tracking-tight"
            style={{ fontFamily: 'Montserrat' }}
          >
            <span className="text-white drop-shadow-2xl">Adv. </span>
            <span className="text-gradient drop-shadow-2xl">
              Kishor Kagathara
            </span>
          </motion.h1>

          {/* Premium Tagline with Animation */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed font-medium"
            style={{ fontFamily: 'Montserrat' }}
          >
            <span className="text-gradient font-bold">Expert Legal Counsel</span> & 
            <motion.span 
              className="text-white"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {" "}Trusted Advocate
            </motion.span>
          </motion.p>

          {/* Premium Location with Icon Animation */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-3 text-gray-300 mb-8 glass-morphism px-6 py-3 rounded-full max-w-fit mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="h-5 w-5 text-amber-400" />
            </motion.div>
            <span className="font-medium">Laxminarayan Complex, Near Government Hospital, Dhrol</span>
          </motion.div>

          {/* Premium Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {quickInfoCards.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, y: -5 }}
                className="glass-morphism premium-shadow text-center px-6 py-4 rounded-2xl floating-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-3 luxury-gradient rounded-full flex items-center justify-center text-black shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-black text-gradient mb-1">
                  {stat.title}
                </div>
                <div className="text-white text-sm font-bold mb-1">
                  {stat.subtitle}
                </div>
                <div className="text-gray-300 text-xs">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 glass-morphism px-8 py-6 rounded-2xl max-w-2xl mx-auto premium-shadow"
          >
            <motion.div 
              className="flex items-center space-x-3 text-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Phone className="h-6 w-6 text-amber-400" />
              </motion.div>
              <span className="font-semibold text-lg">+91 96383 12551</span>
            </motion.div>
            <div className="hidden sm:block w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <motion.div 
              className="flex items-center space-x-3 text-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Mail className="h-6 w-6 text-amber-400" />
              </motion.div>
              <span className="font-semibold text-lg">kbk.advocatedhrol@gmail.com</span>
            </motion.div>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.08, 
                  boxShadow: "0 30px 60px -12px rgba(251, 191, 36, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-12 py-6 rounded-full luxury-gradient text-black font-black text-lg overflow-hidden premium-shadow transition-all duration-300"
                style={{ fontFamily: 'Montserrat' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  animate={{ x: [-100, 100, -100] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative z-10 flex items-center">
                  <Calendar className="mr-3 h-6 w-6" />
                  Book Consultation
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                </span>
              </motion.button>
            </Link>

            <motion.a
              href="tel:+919638312551"
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className="group glass-morphism inline-flex items-center px-12 py-6 rounded-full premium-border text-amber-400 font-black text-lg hover:bg-amber-400/10 transition-all duration-300"
              style={{ fontFamily: 'Montserrat' }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Phone className="mr-3 h-6 w-6" />
              </motion.div>
              Call Now
              <motion.div
                className="ml-3 w-3 h-3 bg-green-400 rounded-full animate-pulse"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.a>
          </motion.div>
          </div>
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
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Adv. Kishor Kagathara
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              With over 15 years of dedicated legal practice, I provide comprehensive legal services 
              with unwavering commitment to justice and client satisfaction.
            </p>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(251, 191, 36, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-amber-400 bg-slate-900/50 backdrop-blur-sm text-amber-400 font-bold hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-xl"
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
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
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
                      className="group/btn relative w-full px-8 py-4 rounded-full luxury-gradient text-black font-bold hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        Explore Service
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
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
                Call +91 96383 12551
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}