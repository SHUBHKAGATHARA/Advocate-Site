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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 3 + i * 0.5,
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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 glass-card"
          >
            <span className="text-white text-sm font-semibold tracking-wider uppercase">
              Meet Our Legal Team
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional Legal
            <br />
            <span className="text-white/80">Expertise</span>
          </motion.h1>
          
          <motion.p 
            className="text-responsive-lg text-white/70 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A dedicated team of legal professionals with combined expertise in various practice areas,
            committed to providing exceptional legal services with unwavering dedication to justice and client satisfaction.
          </motion.p>
        </motion.div>

        {/* Adv. Kishor Kagathara Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <motion.div 
            className="glass-card rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-sm"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 glass-card"
              >
                <span className="text-white text-sm font-semibold tracking-wider uppercase">
                  Senior Advocate
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-responsive-4xl font-black mb-6 text-white leading-tight tracking-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Adv. Kishor Kagathara
              </motion.h2>
              
              <motion.p 
                className="text-white/70 text-responsive-lg max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Senior Advocate with over 15 years of dedicated legal practice
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Kishor's Image */}
              <motion.div variants={itemVariants} className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl glass-card"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10" />
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
                  <div className="hidden w-full h-[600px] bg-black flex items-center justify-center rounded-2xl border border-white/20">
                    <div className="text-center text-white">
                      <Scale className="h-16 w-16 mx-auto mb-4 text-white" />
                      <p className="text-lg font-semibold">Adv. Kishor Kagathara</p>
                      <p className="text-white/70">Senior Advocate</p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 glass-card"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Scale className="h-8 w-8 text-black" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Adv. Kishor Kagathara</h4>
                        <p className="text-white/80 font-semibold">Senior Advocate</p>
                        <div className="flex items-center space-x-2 text-white/60 text-sm mt-2">
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
                  <h3 className="text-responsive-3xl font-black text-white mb-6 tracking-tight">
                    Dedicated to Legal Excellence
                  </h3>
                  <div className="space-y-6 text-white/80 text-responsive-base leading-relaxed">
                    <p>
                      I am <strong className="text-white font-bold">Adv. Kishor Kagathara</strong>, a practicing advocate based in Dhrol, Gujarat, 
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
                <motion.div 
                  className="glass-card p-6 rounded-xl border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-bold text-white mb-6 tracking-tight">Areas of Expertise</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-white/80 font-medium">Criminal Law</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-white/80 font-medium">Civil Litigation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-white/80 font-medium">Family Law</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-white/80 font-medium">Corporate Law</span>
                    </div>
                  </div>
                </motion.div>

                {/* Kishor's Contact Information */}
                <motion.div 
                  className="glass-card p-6 rounded-xl border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-bold text-white mb-6 tracking-tight">Direct Contact</h4>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 border border-white/10"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="h-5 w-5 text-white" />
                      <span className="text-white/90 font-medium">+91 96383 12551</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 border border-white/10"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="h-5 w-5 text-white" />
                      <span className="text-white/90 font-medium">kbk.advocatedhrol@gmail.com</span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-responsive-4xl font-black text-white mb-6 tracking-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              Professional Achievements
            </motion.h2>
            <motion.p 
              className="text-white/70 text-responsive-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Track record of excellence in legal practice
            </motion.p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)"
                }}
                className="text-center p-6 rounded-2xl glass-card border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-black mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {achievement.icon}
                </motion.div>
                <h4 className="text-2xl font-black text-white mb-1">
                  {achievement.title}
                </h4>
                <h5 className="text-white/80 font-semibold mb-3">
                  {achievement.subtitle}
                </h5>
                <p className="text-white/60 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-responsive-4xl font-black text-white mb-6 tracking-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              Core Values
            </motion.h2>
            <motion.p 
              className="text-white/70 text-responsive-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Principles that guide my legal practice
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start space-x-4 p-6 rounded-xl glass-card border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h5 className="text-white font-bold text-xl mb-3 tracking-tight">{value.title}</h5>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* JB KAGATHARA Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <motion.div 
            className="glass-card rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-sm"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 glass-card"
              >
                <span className="text-white text-sm font-semibold tracking-wider uppercase">
                  Associate Advocate
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-responsive-4xl font-black mb-6 text-white leading-tight tracking-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                JB KAGATHARA
              </motion.h2>
              
              <motion.p 
                className="text-white/70 text-responsive-lg max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Associate Advocate bringing fresh perspectives and dedicated client service
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* JB's Image */}
              <motion.div 
                variants={itemVariants} 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl glass-card">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10" />
                  
                  {jbImageExists ? (
                    // Actual JB Photo
                    <img
                      src="/jb-kagathara-photo.png"
                      alt="JB KAGATHARA - Associate Advocate"
                      className="w-full h-[600px] object-cover"
                    />
                  ) : (
                    // Professional Placeholder
                    <div className="w-full h-[600px] bg-black flex items-center justify-center rounded-2xl border border-white/20 relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full" />
                        <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full" />
                        <div className="absolute top-1/2 right-20 w-12 h-12 border border-white rounded-full" />
                      </div>
                      
                      <div className="text-center text-white relative z-10">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <BookOpen className="h-12 w-12 text-black" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">JB KAGATHARA</h3>
                        <p className="text-white/80 font-semibold mb-4">Associate Advocate</p>
                        <div className="text-sm text-white/60 max-w-xs mx-auto">
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
                    className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 glass-card"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-black" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">JB KAGATHARA</h4>
                        <p className="text-white/80 font-semibold">Associate Advocate</p>
                        <div className="flex items-center space-x-2 text-white/60 text-sm mt-2">
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
                  <h3 className="text-responsive-3xl font-black text-white mb-6 tracking-tight">
                    Professional Legal Expertise
                  </h3>
                  <div className="space-y-6 text-white/80 text-responsive-base leading-relaxed">
                    <p>
                      <strong className="text-white font-bold">JB KAGATHARA</strong> brings valuable legal expertise and 
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
                <motion.div 
                  className="glass-card p-6 rounded-xl border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-bold text-white mb-6 tracking-tight">Areas of Expertise</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-white/80 font-medium">Contract Law</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-white/80 font-medium">Property Law</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-white/80 font-medium">Documentation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-white/80 font-medium">Legal Research</span>
                    </div>
                  </div>
                </motion.div>

                {/* JB's Contact Information */}
                <motion.div 
                  className="glass-card p-6 rounded-xl border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-bold text-white mb-6 tracking-tight">Direct Contact</h4>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 border border-white/10"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="h-5 w-5 text-white" />
                      <span className="text-white/90 font-medium">+91 99242 63454</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 border border-white/10"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="h-5 w-5 text-white" />
                      <span className="text-white/90 font-medium">jbk1630@gmail.com</span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Contact & CTA Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.div 
            className="glass-card rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-sm"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-responsive-4xl font-black text-white mb-6 tracking-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p 
                className="text-white/70 mb-8 text-responsive-lg max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Contact our legal team today to discuss your legal needs and discover how we can help you achieve the best possible outcome. 
                Both advocates are available for consultation.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Kishor Contact Card */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-xl border border-white/20"
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Scale className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Adv. Kishor Kagathara</h4>
                    <p className="text-white/80 text-sm font-medium">Senior Advocate</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-center space-x-3 p-2 rounded-lg bg-white/5"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="h-4 w-4 text-white" />
                    <span className="text-white/90 text-sm font-medium">+91 96383 12551</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3 p-2 rounded-lg bg-white/5"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="h-4 w-4 text-white" />
                    <span className="text-white/90 text-sm font-medium">kbk.advocatedhrol@gmail.com</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* JB Contact Card */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-xl border border-white/20"
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">JB KAGATHARA</h4>
                    <p className="text-white/80 text-sm font-medium">Associate Advocate</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-center space-x-3 p-2 rounded-lg bg-white/5"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="h-4 w-4 text-white" />
                    <span className="text-white/90 text-sm font-medium">+91 99242 63454</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3 p-2 rounded-lg bg-white/5"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="h-4 w-4 text-white" />
                    <span className="text-white/90 text-sm font-medium">jbk1630@gmail.com</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-white group relative px-8 py-4 rounded-full overflow-hidden"
                >
                  <span className="relative z-10 flex items-center text-lg font-bold">
                    Get Free Consultation
                    <Calendar className="ml-3 h-5 w-5" />
                  </span>
                </motion.button>
              </Link>
              
              <motion.a
                href="tel:+919638312551"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-outline group px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center backdrop-blur-sm"
              >
                <Phone className="mr-3 h-5 w-5" />
                Call for Emergency
              </motion.a>
            </div>

            {/* Office Location */}
            <motion.div 
              className="text-center mt-8 pt-8 border-t border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <MapPin className="h-5 w-5 text-white" />
                <span className="font-medium">Laxminarayan Complex, Near Government Hospital, Dhrol, Gujarat</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}