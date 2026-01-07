'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Lightbulb, CheckCircle2, Target, TrendingUp, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function AIStarterGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/ai-maturity-model" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors font-heading">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to AI Maturity Model
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-sm font-heading font-semibold opacity-90 block mb-2">Level 0-1</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black">AI Starter Guide</h1>
            </div>
          </div>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl font-body leading-relaxed">
            Your comprehensive guide to getting started with AI in your business. Learn the fundamentals, understand the basics, and take your first steps toward AI transformation.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">What is AI and Why Does It Matter?</h2>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-body">
                Artificial Intelligence (AI) is transforming how businesses operate, compete, and grow. At its core, AI enables machines to learn from data, make decisions, and perform tasks that typically require human intelligence.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-body">
                For businesses at Level 0-1, AI represents an opportunity to automate repetitive tasks, gain insights from data, and improve customer experiences. The key is starting small and building gradually.
              </p>
            </div>
          </motion.section>

          {/* Key Concepts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">Key AI Concepts You Need to Know</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Machine Learning',
                  description: 'AI systems that learn from data without being explicitly programmed for every task.',
                },
                {
                  icon: Zap,
                  title: 'Natural Language Processing',
                  description: 'AI that understands and processes human language, enabling chatbots and voice assistants.',
                },
                {
                  icon: TrendingUp,
                  title: 'Predictive Analytics',
                  description: 'Using AI to analyze historical data and predict future trends and behaviors.',
                },
                {
                  icon: Users,
                  title: 'Automation',
                  description: 'AI-powered systems that handle repetitive tasks, freeing up human resources.',
                },
              ].map((concept, index) => {
                const Icon = concept.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-heading font-bold mb-2 text-gray-900">{concept.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 font-body">{concept.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* Progress Funnel Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">AI Adoption Journey</h2>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 shadow-lg">
              <h3 className="text-lg font-heading font-bold mb-6 text-gray-900 text-center">From Awareness to Implementation</h3>
              <div className="max-w-2xl mx-auto space-y-3">
                {[
                  { stage: 'Awareness', percentage: 100, color: 'from-red-500 to-orange-500', width: '100%' },
                  { stage: 'Research', percentage: 75, color: 'from-orange-500 to-yellow-500', width: '85%' },
                  { stage: 'Trial', percentage: 50, color: 'from-yellow-500 to-green-500', width: '70%' },
                  { stage: 'Implementation', percentage: 25, color: 'from-green-500 to-blue-500', width: '55%' },
                  { stage: 'Success', percentage: 10, color: 'from-blue-500 to-purple-500', width: '40%' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-heading font-semibold text-gray-700">{item.stage}</span>
                      <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
                    </div>
                    <div className="h-8 bg-white/50 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: item.width }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.15, type: 'spring' }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full shadow-md`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Getting Started Steps */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">Your First 30 Days: Action Plan</h2>
            <div className="space-y-6">
              {[
                {
                  week: 'Week 1-2',
                  title: 'Assess Your Current State',
                  steps: [
                    'Identify repetitive tasks in your business',
                    'Document current pain points and inefficiencies',
                    'List areas where AI could add value',
                    'Assess your team\'s AI readiness',
                  ],
                },
                {
                  week: 'Week 3',
                  title: 'Explore AI Tools',
                  steps: [
                    'Research AI tools relevant to your industry',
                    'Try free trials of 2-3 tools',
                    'Attend webinars or online courses on AI basics',
                    'Join AI communities and forums',
                  ],
                },
                {
                  week: 'Week 4',
                  title: 'Pilot Your First AI Project',
                  steps: [
                    'Choose one low-risk area to start',
                    'Set clear success metrics',
                    'Implement a simple AI solution',
                    'Monitor results and gather feedback',
                  ],
                },
              ].map((phase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <span className="text-sm font-heading font-semibold text-gray-500">{phase.week}</span>
                      <h3 className="text-lg md:text-xl font-heading font-bold text-gray-900">{phase.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-14">
                    {phase.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base text-gray-700 font-body">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Timeline Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">30-Day Progress Timeline</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="relative h-48">
                <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                  {/* Grid lines */}
                  {[0, 30, 60, 90, 120, 150].map((y, i) => (
                    <line key={i} x1="0" y1={y} x2="400" y2={y} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4,4" />
                  ))}
                  {/* Progress line */}
                  <motion.polyline
                    points="0,140 100,120 200,100 300,80 400,60"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                  {/* Milestones */}
                  {[
                    { x: 0, y: 140, day: 'Day 0', label: 'Start' },
                    { x: 100, y: 120, day: 'Day 7', label: 'Research' },
                    { x: 200, y: 100, day: 'Day 14', label: 'Trial' },
                    { x: 300, y: 80, day: 'Day 21', label: 'Implement' },
                    { x: 400, y: 60, day: 'Day 30', label: 'Success' },
                  ].map((point, index) => (
                    <motion.g key={index}>
                      <motion.circle
                        cx={point.x}
                        cy={point.y}
                        r="8"
                        fill="#EF4444"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.2 }}
                      />
                      <text x={point.x} y={point.y - 15} textAnchor="middle" className="text-xs font-bold fill-gray-700">
                        {point.day}
                      </text>
                    </motion.g>
                  ))}
                </svg>
              </div>
            </div>
          </motion.section>

          {/* Common Use Cases */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">Common AI Use Cases for Beginners</h2>
            
            {/* Use Case Adoption Chart */}
            <div className="mb-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 shadow-lg">
              <h3 className="text-lg font-heading font-bold mb-6 text-gray-900 text-center">Most Popular AI Use Cases</h3>
              <div className="space-y-4">
                {[
                  { useCase: 'Customer Support Chatbot', adoption: 85, color: 'from-blue-500 to-cyan-500' },
                  { useCase: 'Email Automation', adoption: 70, color: 'from-green-500 to-emerald-500' },
                  { useCase: 'Content Creation', adoption: 65, color: 'from-purple-500 to-pink-500' },
                  { useCase: 'Data Entry Automation', adoption: 55, color: 'from-orange-500 to-red-500' },
                  { useCase: 'Analytics & Reporting', adoption: 45, color: 'from-yellow-500 to-orange-500' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">{item.useCase}</span>
                      <span className="text-sm font-bold text-gray-900">{item.adoption}%</span>
                    </div>
                    <div className="h-6 bg-white/50 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.adoption}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.15, type: 'spring' }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full shadow-md`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Customer Support',
                  description: 'AI chatbots that answer common questions 24/7',
                  benefit: 'Reduce response time by 80%',
                },
                {
                  title: 'Email Automation',
                  description: 'Smart email categorization and automated responses',
                  benefit: 'Save 10+ hours per week',
                },
                {
                  title: 'Data Entry',
                  description: 'Automated data extraction from documents',
                  benefit: 'Eliminate manual errors',
                },
                {
                  title: 'Content Creation',
                  description: 'AI tools for writing, editing, and content generation',
                  benefit: '10x content production',
                },
                {
                  title: 'Analytics & Reporting',
                  description: 'Automated report generation and insights',
                  benefit: 'Real-time decision making',
                },
                {
                  title: 'Scheduling',
                  description: 'AI-powered calendar and meeting management',
                  benefit: 'Optimize team productivity',
                },
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-base md:text-lg font-heading font-bold mb-2 text-gray-900">{useCase.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 font-body">{useCase.description}</p>
                  <div className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-heading font-semibold inline-block">
                    {useCase.benefit}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 md:mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-200"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-4 md:mb-6 text-gray-900">Ready to Take the Next Step?</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 font-body leading-relaxed">
              Now that you understand the basics, it's time to explore how AI can specifically help your business. Our team can guide you through the implementation process.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/services"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-heading font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-gray-900 rounded-xl font-heading font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
              </Link>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  )
}

