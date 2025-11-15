'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, TrendingUp, Shield, CheckCircle, Star } from 'lucide-react'

export default function AboutUs() {
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

  const cardVariants = {
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

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "15+ Years",
      subtitle: "Experience",
      description: "Trusted legal expertise"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "500+",
      subtitle: "Cases Handled",
      description: "Successfully resolved"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "98%",
      subtitle: "Success Rate",
      description: "Proven track record"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "24/7",
      subtitle: "Support",
      description: "Always available"
    }
  ]

  const coreValues = [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our legal practices"
    },
    {
      title: "Excellence",
      description: "Committed to delivering exceptional legal services with attention to detail"
    },
    {
      title: "Client-Focused",
      description: "Your success is our priority, with personalized legal solutions"
    },
    {
      title: "Innovation",
      description: "Leveraging modern approaches to solve complex legal challenges"
    }
  ]

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      id="about"
    >
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
        <motion.div
          animate={{
            rotate: [360, 0]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-yellow-500/5 to-yellow-700/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6"
          >
            <span className="text-yellow-400 text-sm font-medium">
              About Our Firm
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Dedicated to </span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Legal Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With over 15 years of experience, we provide comprehensive legal services 
            with unwavering commitment to justice and client satisfaction.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&auto=format&fit=crop&q=80"
                alt="Professional Lawyer"
                className="w-full h-[600px] object-cover"
              />
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-yellow-500/20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Adv. John Smith</h4>
                    <p className="text-gray-300 text-sm">Senior Partner</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Who We Are
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We are a premier law firm dedicated to providing exceptional legal services 
                across multiple practice areas. Our team combines deep legal expertise with 
                innovative approaches to deliver results that matter.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded on the principles of integrity, excellence, and client advocacy, 
                we have successfully represented individuals and businesses in complex 
                legal matters for over a decade.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Our Core Values</h4>
              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold mb-1">{value.title}</h5>
                      <p className="text-gray-300 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold text-lg overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Learn More About Us
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievement Cards */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.25)"
                }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {achievement.icon}
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-1">
                  {achievement.title}
                </h4>
                <h5 className="text-yellow-400 font-semibold mb-2">
                  {achievement.subtitle}
                </h5>
                <p className="text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}