'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag,
  Eye,
  Share2,
  FileText,
  Star,
  Phone
} from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  views: number
  featured: boolean
  tags: string[]
}

export default function BlogPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Understanding Your Rights During Police Investigation',
      excerpt: 'Know your fundamental rights when dealing with police investigations and how to protect yourself legally.',
      content: '',
      category: 'Criminal Law',
      author: 'Adv. Kishor Kagathara',
      date: 'November 10, 2024',
      readTime: '5 min',
      views: 1240,
      featured: true,
      tags: ['Criminal Defense', 'Rights', 'Police Investigation']
    },
    {
      id: '2',
      title: 'Property Registration Process in Gujarat: Complete Guide',
      excerpt: 'Step-by-step guide to property registration in Gujarat, including required documents and legal procedures.',
      content: '',
      category: 'Property Law',
      author: 'Adv. Kishor Kagathara',
      date: 'November 8, 2024',
      readTime: '8 min',
      views: 980,
      featured: true,
      tags: ['Property Registration', 'Gujarat Law', 'Real Estate']
    },
    {
      id: '3',
      title: 'Divorce Laws in India: What You Need to Know',
      excerpt: 'Comprehensive overview of divorce laws, procedures, and your rights in matrimonial disputes.',
      content: '',
      category: 'Family Law',
      author: 'Adv. Kishor Kagathara',
      date: 'November 5, 2024',
      readTime: '10 min',
      views: 1560,
      featured: false,
      tags: ['Divorce', 'Matrimonial Law', 'Family Rights']
    },
    {
      id: '4',
      title: 'Business Registration and Compliance in India',
      excerpt: 'Essential guide for entrepreneurs on business registration, compliance requirements, and legal obligations.',
      content: '',
      category: 'Corporate Law',
      author: 'Adv. Kishor Kagathara',
      date: 'November 2, 2024',
      readTime: '7 min',
      views: 720,
      featured: false,
      tags: ['Business Law', 'Corporate Registration', 'Compliance']
    },
    {
      id: '5',
      title: 'Employment Rights and Labor Law Basics',
      excerpt: 'Understanding your workplace rights, labor laws, and how to handle employment disputes.',
      content: '',
      category: 'Employment Law',
      author: 'Adv. Kishor Kagathara',
      date: 'October 30, 2024',
      readTime: '6 min',
      views: 890,
      featured: false,
      tags: ['Employment Rights', 'Labor Law', 'Workplace']
    },
    {
      id: '6',
      title: 'Understanding Civil Court Procedures',
      excerpt: 'Navigate civil court procedures with confidence - from filing cases to judgment execution.',
      content: '',
      category: 'Civil Law',
      author: 'Adv. Kishor Kagathara',
      date: 'October 28, 2024',
      readTime: '9 min',
      views: 650,
      featured: false,
      tags: ['Civil Procedure', 'Court Process', 'Litigation']
    }
  ]

  const categories = ['All', 'Criminal Law', 'Property Law', 'Family Law', 'Corporate Law', 'Employment Law', 'Civil Law']
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 4)

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
            <BookOpen className="mr-2 h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">
              Legal Insights & Updates
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Legal </span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed with latest legal updates, practical guides, and expert insights from Adv. Kishor Kagathara
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Star className="mr-3 h-8 w-8 text-yellow-400" />
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-yellow-400" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-400/30">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime} read
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Eye className="h-4 w-4 mr-1" />
                        {post.views} views
                      </div>
                    </div>
                    <motion.div
                      className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Recent Posts */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Clock className="mr-3 h-8 w-8 text-yellow-400" />
            Recent Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -5 }}
                className="group cursor-pointer bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-400">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Legal Advice?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              These articles provide general information. For specific legal advice tailored to your situation, 
              schedule a consultation with Adv. Kishor Kagathara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold text-lg flex items-center"
                >
                  Schedule Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
              
              <motion.a
                href="tel:+919638312551"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Urgent Matters
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}