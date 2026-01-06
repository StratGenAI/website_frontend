'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Users, Puzzle, CheckCircle2, Settings, Zap } from 'lucide-react'
import Link from 'next/link'

export default function IntegrationSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 pt-32 md:pt-40">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/ai-maturity-model" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to AI Maturity Model
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-sm font-semibold opacity-90">Level 2-3</span>
              <h1 className="text-4xl md:text-5xl font-black">Integration Support</h1>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Get expert guidance on integrating AI into your existing systems. Seamlessly connect AI solutions with your current infrastructure and workflows.
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Integration Matters</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Successful AI implementation requires seamless integration with your existing systems, workflows, and business processes. Poor integration can lead to data silos, workflow disruptions, and limited ROI.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This guide covers best practices, common integration patterns, and strategies for connecting AI solutions with your current technology stack.
              </p>
            </div>
          </motion.section>

          {/* Integration Approaches */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Integration Approaches</h2>
            <div className="space-y-6">
              {[
                {
                  approach: 'API Integration',
                  icon: Puzzle,
                  description: 'Connect AI services through RESTful APIs or GraphQL',
                  useCases: [
                    'Third-party AI services',
                    'Microservices architecture',
                    'Cloud-based AI platforms',
                  ],
                  benefits: [
                    'Flexible and scalable',
                    'Language-agnostic',
                    'Easy to maintain',
                  ],
                },
                {
                  approach: 'Database Integration',
                  icon: Settings,
                  description: 'Direct integration with your data storage systems',
                  useCases: [
                    'Real-time data processing',
                    'Historical data analysis',
                    'Data warehouse connections',
                  ],
                  benefits: [
                    'Direct data access',
                    'Low latency',
                    'Secure connections',
                  ],
                },
                {
                  approach: 'Workflow Integration',
                  icon: Zap,
                  description: 'Embed AI into existing business processes and workflows',
                  useCases: [
                    'CRM integration',
                    'ERP systems',
                    'Business process automation',
                  ],
                  benefits: [
                    'Seamless user experience',
                    'Minimal disruption',
                    'Enhanced productivity',
                  ],
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.approach}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 ml-16">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Use Cases</h4>
                        <ul className="space-y-1">
                          {item.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {item.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* Integration Checklist */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Integration Checklist</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="space-y-4">
                {[
                  {
                    phase: 'Pre-Integration',
                    tasks: [
                      'Audit existing systems and infrastructure',
                      'Identify integration points and dependencies',
                      'Assess data quality and availability',
                      'Define integration requirements and scope',
                      'Plan for data management',
                    ],
                  },
                  {
                    phase: 'Integration Planning',
                    tasks: [
                      'Design integration architecture',
                      'Choose integration tools and platforms',
                      'Create detailed integration roadmap',
                      'Establish testing protocols',
                      'Plan for rollback and error handling',
                    ],
                  },
                  {
                    phase: 'Implementation',
                    tasks: [
                      'Set up development environment',
                      'Build integration components',
                      'Implement data mapping and transformation',
                      'Configure authentication and access',
                      'Conduct unit and integration testing',
                    ],
                  },
                  {
                    phase: 'Deployment & Monitoring',
                    tasks: [
                      'Deploy to staging environment',
                      'Perform end-to-end testing',
                      'Train users on new workflows',
                      'Monitor performance and errors',
                      'Gather feedback and iterate',
                    ],
                  },
                ].map((phase, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-bold text-gray-900 mb-2">{phase.phase}</h3>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Need Integration Support?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our team can help you integrate AI solutions seamlessly into your existing systems and ensure smooth implementation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Get Integration Support</span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all flex items-center space-x-2"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  )
}

