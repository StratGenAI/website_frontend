'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Target, Crown, TrendingUp, Users, Lightbulb, CheckCircle2, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function AILeadershipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 pt-32 md:pt-40">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/ai-maturity-model" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to AI Maturity Model
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-sm font-semibold opacity-90">Level 4-5</span>
              <h1 className="text-4xl md:text-5xl font-black">AI Leadership</h1>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Strategic insights for advanced AI implementation and transformation. Lead your organization into the AI-first future with confidence and vision.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Leading in the AI Era</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                At Level 4-5, AI is no longer just a tool—it's a core strategic capability that drives competitive advantage. Leadership in this space requires vision, strategic thinking, and the ability to continuously innovate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This guide provides frameworks and insights for AI leaders who want to maintain their competitive edge and drive transformative change.
              </p>
            </div>
          </motion.section>

          {/* Maturity Progression Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">AI Maturity Progression</h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-lg">
              <h3 className="text-lg font-heading font-bold mb-6 text-gray-900 text-center">Leadership Level Capabilities</h3>
              <div className="space-y-4">
                {[
                  { capability: 'Strategic Vision', score: 95, color: 'from-purple-500 to-pink-500' },
                  { capability: 'Innovation Pipeline', score: 90, color: 'from-pink-500 to-rose-500' },
                  { capability: 'Talent Development', score: 88, color: 'from-rose-500 to-red-500' },
                  { capability: 'Data Excellence', score: 92, color: 'from-red-500 to-orange-500' },
                  { capability: 'Market Leadership', score: 85, color: 'from-orange-500 to-yellow-500' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">{item.capability}</span>
                      <span className="text-sm font-bold text-gray-900">{item.score}%</span>
                    </div>
                    <div className="h-6 bg-white/50 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.score}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full shadow-md`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Leadership Pillars */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Pillars of AI Leadership</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Crown,
                  title: 'Strategic Vision',
                  description: 'Define long-term AI strategy aligned with business goals',
                  keyPoints: [
                    'AI-first business model',
                    'Innovation roadmap',
                    'Competitive positioning',
                    'Market leadership',
                  ],
                },
                {
                  icon: TrendingUp,
                  title: 'Continuous Innovation',
                  description: 'Foster a culture of experimentation and rapid iteration',
                  keyPoints: [
                    'R&D investment',
                    'Emerging tech adoption',
                    'Innovation labs',
                    'Partnership ecosystem',
                  ],
                },
                {
                  icon: Users,
                  title: 'Talent & Culture',
                  description: 'Build and nurture AI talent while transforming culture',
                  keyPoints: [
                    'AI talent acquisition',
                    'Continuous learning',
                    'Cross-functional teams',
                    'Innovation mindset',
                  ],
                },
                {
                  icon: BarChart3,
                  title: 'Data Excellence',
                  description: 'Leverage data as a strategic asset',
                  keyPoints: [
                    'Data strategy',
                    'Quality governance',
                    'Real-time analytics',
                    'Predictive capabilities',
                  ],
                },
              ].map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{pillar.title}</h3>
                    <p className="text-gray-600 mb-4">{pillar.description}</p>
                    <ul className="space-y-2">
                      {pillar.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* Advanced Strategies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Advanced AI Strategies</h2>
            <div className="space-y-6">
              {[
                {
                  strategy: 'AI-First Product Development',
                  description: 'Build products with AI at the core, not as an add-on',
                  implementation: [
                    'AI-native architecture',
                    'User experience optimization',
                    'Continuous learning systems',
                    'Personalization at scale',
                  ],
                },
                {
                  strategy: 'Ecosystem Leadership',
                  description: 'Create and lead AI ecosystems and partnerships',
                  implementation: [
                    'Platform development',
                    'API marketplace',
                    'Partner networks',
                    'Open innovation',
                  ],
                },
                {
                  strategy: 'Predictive Business Models',
                  description: 'Use AI to predict and shape market trends',
                  implementation: [
                    'Market prediction models',
                    'Demand forecasting',
                    'Risk management',
                    'Opportunity identification',
                  ],
                },
                {
                  strategy: 'Autonomous Operations',
                  description: 'Achieve high levels of automation and autonomy',
                  implementation: [
                    'Self-optimizing systems',
                    'Automated decision-making',
                    'Minimal human intervention',
                    'Continuous improvement',
                  ],
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.strategy}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {item.implementation.map((impl, i) => (
                      <div key={i} className="flex items-start">
                        <Lightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{impl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Competitive Advantage Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Competitive Advantage Metrics</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Market Position</h3>
                  <div className="space-y-3">
                    {[
                      { metric: 'Market Share', value: 85, color: 'from-purple-500 to-pink-500' },
                      { metric: 'Innovation Index', value: 92, color: 'from-pink-500 to-rose-500' },
                      { metric: 'Customer Satisfaction', value: 88, color: 'from-rose-500 to-red-500' },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-semibold text-gray-700">{item.metric}</span>
                          <span className="text-xs font-bold text-gray-900">{item.value}%</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Operational Excellence</h3>
                  <div className="space-y-3">
                    {[
                      { metric: 'Efficiency Gain', value: 90, color: 'from-blue-500 to-cyan-500' },
                      { metric: 'Cost Reduction', value: 75, color: 'from-cyan-500 to-teal-500' },
                      { metric: 'Revenue Growth', value: 82, color: 'from-teal-500 to-green-500' },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-semibold text-gray-700">{item.metric}</span>
                          <span className="text-xs font-bold text-gray-900">{item.value}%</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 1, delay: 0.7 + index * 0.15 }}
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Maintaining Competitive Edge */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200"
          >
            <div className="flex items-center mb-4">
              <Crown className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Maintaining Competitive Edge</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              At Level 4-5, staying ahead requires continuous evolution:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Continuous Improvement</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Regular model retraining and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Performance monitoring and benchmarking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Technology stack evolution</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Innovation Pipeline</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Emerging technology research</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pilot new AI capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Strategic partnerships and acquisitions</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Lead with AI?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our team can help you develop advanced AI strategies, maintain your competitive edge, and drive transformative innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all flex items-center space-x-2"
              >
                <span>Get Strategic Consultation</span>
              </Link>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  )
}

