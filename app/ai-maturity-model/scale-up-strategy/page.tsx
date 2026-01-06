'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Target, TrendingUp, Rocket, CheckCircle2, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ScaleUpStrategyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 pt-32 md:pt-40">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-20">
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
              <span className="text-sm font-semibold opacity-90">Level 2-3</span>
              <h1 className="text-4xl md:text-5xl font-black">Scale-Up Strategy</h1>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Learn how to scale your AI initiatives from pilot to production. Transform successful experiments into enterprise-wide solutions that drive real business value.
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">From Pilot to Production</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                You've successfully piloted AI solutions and seen positive results. Now it's time to scale. Scaling AI requires strategic planning, proper infrastructure, and organizational alignment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This guide provides a comprehensive framework for scaling your AI initiatives, ensuring they deliver consistent value across your organization.
              </p>
            </div>
          </motion.section>

          {/* Scaling Framework */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">The Scaling Framework</h2>
            <div className="space-y-6">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Assess & Plan',
                  duration: '1-2 months',
                  icon: Target,
                  activities: [
                    'Evaluate pilot results and ROI',
                    'Identify scaling opportunities',
                    'Assess infrastructure requirements',
                    'Develop scaling roadmap',
                    'Secure budget and resources',
                  ],
                },
                {
                  phase: 'Phase 2',
                  title: 'Build Infrastructure',
                  duration: '2-4 months',
                  icon: Rocket,
                  activities: [
                    'Set up production environments',
                    'Implement monitoring and governance',
                    'Establish data pipelines',
                    'Build integration capabilities',
                    'Create support processes',
                  ],
                },
                {
                  phase: 'Phase 3',
                  title: 'Expand & Deploy',
                  duration: '3-6 months',
                  icon: TrendingUp,
                  activities: [
                    'Roll out to additional departments',
                    'Scale user base gradually',
                    'Train teams on new systems',
                    'Monitor performance metrics',
                    'Iterate based on feedback',
                  ],
                },
                {
                  phase: 'Phase 4',
                  title: 'Optimize & Evolve',
                  duration: 'Ongoing',
                  icon: Zap,
                  activities: [
                    'Continuously improve models',
                    'Expand use cases',
                    'Integrate new AI capabilities',
                    'Measure and report impact',
                    'Plan next scaling phase',
                  ],
                },
              ].map((phase, index) => {
                const Icon = phase.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500">{phase.phase} • {phase.duration}</span>
                        <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-16">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* Key Considerations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Scaling Considerations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: 'Organizational Readiness',
                  points: [
                    'Change management strategy',
                    'Team training programs',
                    'Stakeholder buy-in',
                    'Cultural adaptation',
                  ],
                },
                {
                  icon: Zap,
                  title: 'Technical Infrastructure',
                  points: [
                    'Scalable architecture',
                    'Data management systems',
                    'Data management',
                    'Performance monitoring',
                  ],
                },
                {
                  icon: Target,
                  title: 'Governance & Ethics',
                  points: [
                    'AI governance framework',
                    'Ethical guidelines',
                    'Risk management',
                    'Data governance',
                  ],
                },
                {
                  icon: TrendingUp,
                  title: 'Metrics & ROI',
                  points: [
                    'Success metrics definition',
                    'ROI tracking systems',
                    'Performance dashboards',
                    'Regular reporting',
                  ],
                },
              ].map((consideration, index) => {
                const Icon = consideration.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{consideration.title}</h3>
                    <ul className="space-y-2">
                      {consideration.points.map((point, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* Common Challenges */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Common Scaling Challenges & Solutions</h2>
            <div className="space-y-6">
              {[
                {
                  challenge: 'Resource Constraints',
                  solution: 'Prioritize high-impact initiatives, leverage cloud infrastructure, consider phased approach',
                },
                {
                  challenge: 'Data Quality Issues',
                  solution: 'Implement data governance, establish data quality standards, invest in data cleaning tools',
                },
                {
                  challenge: 'Integration Complexity',
                  solution: 'Use API-first architecture, invest in integration platforms, plan for gradual rollout',
                },
                {
                  challenge: 'Change Resistance',
                  solution: 'Communicate benefits clearly, involve users early, provide comprehensive training, celebrate wins',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.challenge}</h3>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
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
            className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Scale Your AI Initiatives?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our team can help you develop a comprehensive scaling strategy tailored to your business needs and guide you through the entire process.
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
                href="#contact"
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

