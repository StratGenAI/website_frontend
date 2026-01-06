'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, BookOpen, Calculator, CheckCircle2, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const resources = [
  {
    category: 'Level 0-1',
    title: 'AI Starter Kit',
    description: 'Your First 30 Days',
    icon: BookOpen,
    type: 'PDF',
    color: 'from-red-500 to-orange-500',
  },
  {
    category: 'Level 0-1',
    title: '10 AI Tools Checklist',
    description: 'Tools You Can Implement Today',
    icon: CheckCircle2,
    type: 'Checklist',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    category: 'Level 0-1',
    title: 'AI ROI Calculator',
    description: 'Calculate Your Potential Returns',
    icon: Calculator,
    type: 'Excel',
    color: 'from-yellow-500 to-green-500',
  },
  {
    category: 'Level 2-3',
    title: 'AI Scale-Up Playbook',
    description: 'From Pilot to Production (40 pages)',
    icon: FileText,
    type: 'PDF',
    color: 'from-green-500 to-blue-500',
  },
  {
    category: 'Level 2-3',
    title: 'AI Integration Checklist',
    description: 'Step-by-step integration guide',
    icon: CheckCircle2,
    type: 'PDF',
    color: 'from-blue-500 to-purple-500',
  },
  {
    category: 'Level 4-5',
    title: 'AI Leadership Framework',
    description: 'Strategic guide for AI leaders',
    icon: BookOpen,
    type: 'PDF',
    color: 'from-purple-500 to-pink-500',
  },
]

export default function ResourcesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [showForm, setShowForm] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    level: '',
  })

  const handleDownload = (index: number) => {
    setShowForm(index)
  }

  const handleSubmit = (e: React.FormEvent, index: number) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    alert('Thank you! Your download will start shortly.')
    setShowForm(null)
    setFormData({ name: '', email: '', company: '', level: '' })
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Take Your <span className="gradient-text">Next Step</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Download free resources tailored to your AI maturity level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              const isFormOpen = showForm === index

              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-heading font-semibold text-gray-700 mb-3">
                      {resource.category}
                    </span>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 font-body text-sm mb-4">
                      {resource.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                      {resource.type}
                    </span>
                  </div>

                  {!isFormOpen ? (
                    <motion.button
                      onClick={() => handleDownload(index)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-heading font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Free</span>
                    </motion.button>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      onSubmit={(e) => handleSubmit(e, index)}
                      className="space-y-3"
                    >
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-heading font-semibold flex items-center justify-center space-x-2"
                      >
                        <Download className="w-5 h-5" />
                        <span>Get Download</span>
                      </button>
                    </motion.form>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


