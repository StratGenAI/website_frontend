'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2, CheckCircle, AlertCircle, Calendar, User, Mail, Phone, Building2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface SessionRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SessionRequestModal({ isOpen, onClose }: SessionRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sessionType: 'strategy_session',
    preferredDate: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Reset form when modal opens
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        company: '', 
        sessionType: 'strategy_session',
        preferredDate: '',
        message: '' 
      })
      setSubmitStatus('idle')
      setSubmitMessage('')
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      // Save to Supabase session_requests table
      const { error: dbError } = await supabase
        .from('session_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            company: formData.company || null,
            session_type: formData.sessionType,
            preferred_date: formData.preferredDate || null,
            message: formData.message || null,
            source: 'ai_maturity_model',
            created_at: new Date().toISOString(),
          },
        ])

      if (dbError) {
        console.error('Error saving to Supabase:', dbError)
        throw new Error('Failed to save session request. Please try again.')
      }

      setSubmitStatus('success')
      setSubmitMessage('Thank you! We have received your session request. Our team will contact you soon to schedule your session.')
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        company: '', 
        sessionType: 'strategy_session',
        preferredDate: '',
        message: '' 
      })

      // Close modal after 3 seconds
      setTimeout(() => {
        onClose()
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 3000)
    } catch (error: any) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage(error.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative z-[10000]"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900">Schedule AI Strategy Session</h2>
                  <p className="text-sm text-gray-600 mt-1">Fill in your details and we'll get back to you</p>
                </div>
                <motion.button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-heading font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4" />
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all font-body"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-heading font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4" />
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all font-body"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="flex items-center gap-2 text-sm font-heading font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all font-body"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="flex items-center gap-2 text-sm font-heading font-semibold text-gray-700 mb-2">
                    <Building2 className="w-4 h-4" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all font-body"
                    placeholder="Your Company"
                  />
                </div>

                {/* Session Type */}
                <div>
                  <label htmlFor="sessionType" className="flex items-center gap-2 text-sm font-heading font-semibold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4" />
                    Session Type
                  </label>
                  <select
                    id="sessionType"
                    value={formData.sessionType}
                    onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all font-body"
                  >
                    <option value="strategy_session">AI Strategy Session</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="demo">Product Demo</option>
                    <option value="assessment">AI Maturity Assessment</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="flex items-center gap-2 text-sm font-heading font-semibold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4" />
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all font-body"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-heading font-semibold text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all font-body resize-none"
                    placeholder="Tell us about your AI goals or any specific questions..."
                  />
                </div>

                {/* Status Message */}
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center space-x-3 ${
                      submitStatus === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-body">{submitMessage}</p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-heading font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Schedule Session</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

