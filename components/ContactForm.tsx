'use client'

import React, { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  date: string
  message: string
  subject: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
    subject: 'General Inquiry'
  })
  
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const subjects = [
    'General Inquiry',
    'Criminal Law',
    'Civil Litigation',
    'Family Law',
    'Corporate Law',
    'Property Law',
    'Revenue Services',
    'Notary Services',
    'Emergency Legal Matter'
  ]

  const validateForm = (): string | null => {
    if (formData.name.trim().length < 2) return 'Name must be at least 2 characters'
    if (!formData.email.includes('@') || formData.email.length < 5) return 'Please enter a valid email address'
    if (formData.message.trim().length < 10) return 'Message must be at least 10 characters'
    return null
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }
    
    setLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          message: '',
          subject: 'General Inquiry'
        })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setError('Failed to send message. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (error) setError('')
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-strong p-8 rounded-2xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
          <span className="text-black text-lg">📧</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Send a Message</h3>
          <p className="text-gray-400 text-sm">Get professional legal consultation</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="form-input"
              placeholder="Your full name"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="form-input"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        {/* Phone and Subject Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="form-input"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Legal Matter *
            </label>
            <select
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              className="form-input"
              required
            >
              {subjects.map(subject => (
                <option key={subject} value={subject} className="bg-slate-800">
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Preferred Consultation Date
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => handleChange('date', e.target.value)}
            className="form-input"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Message *
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={5}
            className="form-input resize-none"
            placeholder="Please describe your legal matter in detail..."
            required
          />
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
          >
            <p className="text-red-400 text-sm">{error}</p>
          </motion.div>
        )}

        {/* Success Message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
          >
            <div className="flex items-center gap-2 text-green-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium">Message sent successfully! We'll contact you within 24 hours.</span>
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          className={`w-full btn-gold flex items-center justify-center gap-2 ${loading ? 'loading' : ''}`}
        >
          {loading ? (
            <>
              <div className="spinner" />
              Sending Message...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </motion.button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center">
          Your information is confidential and protected by attorney-client privilege. 
          We respect your privacy and will never share your details with third parties.
        </p>
      </form>
    </motion.div>
  )
}