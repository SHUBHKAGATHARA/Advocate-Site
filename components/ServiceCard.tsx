'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  title: string
  icon?: string
  description?: string
}

export default function ServiceCard({ title, icon = '⚖️', description }: Props) {
  return (
    <motion.article 
      whileHover={{ y: -8, scale: 1.02 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      initial={{ opacity: 0, y: 20 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="glass p-6 rounded-xl border border-white/10 hover:border-accent/20 transition-all duration-300 cursor-pointer group"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300">{title}</h4>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.article>
  )
}