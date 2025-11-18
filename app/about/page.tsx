'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, TrendingUp, Shield, CheckCircle, Star, MapPin, Phone, Mail, Calendar, Scale, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function AboutPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [jbImageExists, setJbImageExists] = useState(false)

  // Check if JB image exists
  useEffect(() => {
    const checkImage = () => {
      const img = new Image()
      img.onload = () => setJbImageExists(true)
      img.onerror = () => setJbImageExists(false)
      img.src = '/jb-kagathara-photo.png'
    }
    checkImage()
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
      title: "15+",
      subtitle: "Years Experience",
      description: "Dedicated legal practice since 2008"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "500+",
      subtitle: "Cases Handled",
      description: "Successfully resolved across all practice areas"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "98%",
      subtitle: "Success Rate",
      description: "Proven track record of favorable outcomes"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "24/7",
      subtitle: "Client Support",
      description: "Always available for urgent legal matters"
    }
  ]

  const coreValues = [
    {
      title: "Integrity & Ethics",
      description: "I uphold the highest ethical standards in all legal practices, ensuring transparency and honesty in every client interaction."
    },
    {
      title: "Legal Excellence",
      description: "Committed to delivering exceptional legal services with meticulous attention to detail and thorough case preparation."
    },
    {
      title: "Client-Focused Approach",
      description: "Your success is my priority. I provide personalized legal solutions tailored to your specific needs and circumstances."
    },
    {
      title: "Strategic Innovation",
      description: "Leveraging modern legal approaches and technology to solve complex legal challenges effectively and efficiently."
    }
  ]

  const qualifications = [
    {
      title: "Bachelor of Laws (LL.B)",
      institution: "Gujarat University",
      year: "2007",
      description: "Graduated with distinction in Constitutional Law and Criminal Procedure"
    },
    {
      title: "Bar Council Registration",
      institution: "Gujarat State Bar Council",
      year: "2008",
      description: "Licensed to practice law in all courts of Gujarat State"
    },
    {
      title: "Continuing Legal Education",
      institution: "Various Legal Institutions",
      year: "Ongoing",
      description: "Regular participation in legal seminars and professional development programs"
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
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6"
          >
            <span className="text-yellow-400 text-sm font-medium">
              Meet Our Legal Team
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Professional </span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Legal Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A dedicated team of legal professionals with combined expertise in various practice areas,
            committed to providing exceptional legal services with unwavering dedication to justice and client satisfaction.
          </p>
        </motion.div>

        {/* Adv. Kishor Kagathara Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6"
              >
                <span className="text-yellow-400 text-sm font-medium">
                  Senior Advocate
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Adv. Kishor Kagathara
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Senior Advocate with over 15 years of dedicated legal practice
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Kishor's Image */}
              <motion.div variants={itemVariants} className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent z-10" />
                  <img
                    src="/advocate-photo.png"
                    alt="Adv. Kishor Kagathara - Senior Advocate"
                    className="w-full h-[600px] object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-[600px] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center rounded-2xl border border-white/10">
                    <div className="text-center text-white">
                      <Scale className="h-16 w-16 mx-auto mb-4 text-yellow-400" />
                      <p className="text-lg font-semibold">Adv. Kishor Kagathara</p>
                      <p className="text-gray-300">Senior Advocate</p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                        <Scale className="h-8 w-8 text-black" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Adv. Kishor Kagathara</h4>
                        <p className="text-yellow-400 font-semibold">Senior Advocate</p>
                        <div className="flex items-center space-x-2 text-gray-300 text-sm mt-2">
                          <MapPin className="h-4 w-4" />
                          <span>Dhrol, Gujarat</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Kishor's Content */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Dedicated to Legal Excellence
                  </h3>
                  <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                    <p>
                      I am <strong className="text-yellow-400">Adv. Kishor Kagathara</strong>, a practicing advocate based in Dhrol, Gujarat, 
                      with over 15 years of dedicated legal practice. My office is located at Laxminarayan Complex, 
                      Near Government Hospital, Dhrol, where I serve clients across Gujarat with comprehensive legal services.
                    </p>
                    <p>
                      My legal career began in 2008, and since then I have been committed to providing exceptional legal representation 
                      across multiple practice areas. I specialize in criminal law, civil litigation, family law, and corporate legal matters.
                      My approach combines deep legal knowledge with practical experience to deliver results.
                    </p>
                    <p>
                      With a proven track record of successful case resolution and client satisfaction, I continue to stay updated 
                      with the latest legal developments and precedents to ensure the best possible outcomes for my clients.
                      I believe in building strong client relationships based on trust, transparency, and effective communication.
                    </p>
                  </div>
                </div>

                {/* Kishor's Specializations */}
                <div className="bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-xl border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4">Areas of Expertise</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">Criminal Law</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">Civil Litigation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">Family Law</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">Corporate Law</span>
                    </div>
                  </div>
                </div>

                {/* Kishor's Contact Information */}
                <div className="bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-xl border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4">Direct Contact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-300">+91 96383 12551</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-300">kbk.advocatedhrol@gmail.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Achievements
            </h2>
            <p className="text-gray-300 text-lg">
              Track record of excellence in legal practice
            </p>
          </div>
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

        {/* Core Values */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-white">Core </span>
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Principles that guide my legal practice
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="text-white font-bold text-lg mb-2">{value.title}</h5>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* JB KAGATHARA Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-6"
              >
                <span className="text-yellow-400 text-sm font-medium">
                  Associate Advocate
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  JB KAGATHARA
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Associate Advocate bringing fresh perspectives and dedicated client service
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* JB's Image */}
              <motion.div 
                variants={itemVariants} 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent z-10" />
                  
                  {jbImageExists ? (
                    // Actual JB Photo
                    <img
                      src="/jb-kagathara-photo.png"
                      alt="JB KAGATHARA - Associate Advocate"
                      className="w-full h-[600px] object-cover"
                    />
                  ) : (
                    // Professional Placeholder
                    <div className="w-full h-[600px] bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center rounded-2xl border border-white/20 relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-20 h-20 border border-yellow-400 rounded-full" />
                        <div className="absolute bottom-10 right-10 w-16 h-16 border border-yellow-400 rounded-full" />
                        <div className="absolute top-1/2 right-20 w-12 h-12 border border-yellow-400 rounded-full" />
                      </div>
                      
                      <div className="text-center text-white relative z-10">
                        <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <BookOpen className="h-12 w-12 text-black" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">JB KAGATHARA</h3>
                        <p className="text-yellow-400 font-semibold mb-4">Associate Advocate</p>
                        <div className="text-sm text-gray-300 max-w-xs mx-auto">
                          <p>Professional legal expertise</p>
                          <p>dedicated to client success</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-black" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">JB KAGATHARA</h4>
                        <p className="text-yellow-400 font-semibold">Associate Advocate</p>
                        <div className="flex items-center space-x-2 text-gray-300 text-sm mt-2">
                          <MapPin className="h-4 w-4" />
                          <span>Dhrol, Gujarat</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* JB's Content */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Professional Legal Expertise
                  </h3>
                  <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                    <p>
                      <strong className="text-yellow-400">JB KAGATHARA</strong> brings valuable legal expertise and 
                      dedication to our practice. As an associate advocate, JB works closely with clients to provide 
                      comprehensive legal solutions across various practice areas, ensuring meticulous attention to detail 
                      and professional handling of every case.
                    </p>
                    <p>
                      With a commitment to excellence and client satisfaction, JB specializes in modern legal approaches, 
                      contract law, property disputes, and documentation services. The collaborative approach between 
                      our advocates guarantees thorough legal representation and innovative solutions to complex legal challenges.
                    </p>
                    <p>
                      JB's expertise complements our firm's comprehensive legal services, providing clients with 
                      additional support, specialized knowledge, and a fresh perspective on legal matters. 
                      This ensures that every client receives the best possible legal counsel and representation.
                    </p>
                  </div>
                </div>

                {/* JB's Specializations */}
                <div className="bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-xl border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4">Areas of Expertise</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">Contract Law</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">Property Law</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">Documentation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">Legal Research</span>
                    </div>
                  </div>
                </div>

                {/* JB's Contact Information */}
                <div className="bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-xl border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4">Direct Contact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-300">+91 99242 63454</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-300">jbk1630@gmail.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Team Contact & CTA Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-8 text-lg max-w-3xl mx-auto">
                Contact our legal team today to discuss your legal needs and discover how we can help you achieve the best possible outcome. 
                Both advocates are available for consultation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Kishor Contact Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-xl border border-white/10"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Scale className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Adv. Kishor Kagathara</h4>
                    <p className="text-yellow-400 text-sm">Senior Advocate</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">+91 96383 12551</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">kbk.advocatedhrol@gmail.com</span>
                  </div>
                </div>
              </motion.div>

              {/* JB Contact Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-xl border border-white/10"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">JB KAGATHARA</h4>
                    <p className="text-yellow-400 text-sm">Associate Advocate</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">+91 99242 63454</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">jbk1630@gmail.com</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-white to-gray-100 text-black font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-white/30 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Get Free Consultation
                    <Calendar className="ml-2 h-5 w-5" />
                  </span>
                </motion.button>
              </Link>
              
              <motion.a
                href="tel:+919638312551"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Emergency
              </motion.a>
            </div>

            {/* Office Location */}
            <div className="text-center mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span>Laxminarayan Complex, Near Government Hospital, Dhrol, Gujarat</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}