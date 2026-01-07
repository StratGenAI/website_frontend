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

          {/* Scaling Growth Funnel */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Scaling Growth Funnel</h2>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 shadow-lg">
              <h3 className="text-lg font-heading font-bold mb-6 text-gray-900 text-center">From Pilot to Enterprise Scale</h3>
              <div className="max-w-2xl mx-auto space-y-3">
                {[
                  { stage: 'Pilot (1-10 users)', value: 100, color: 'from-green-500 to-emerald-500', width: '100%' },
                  { stage: 'Department (10-50 users)', value: 75, color: 'from-emerald-500 to-cyan-500', width: '85%' },
                  { stage: 'Division (50-200 users)', value: 50, color: 'from-cyan-500 to-blue-500', width: '70%' },
                  { stage: 'Enterprise (200+ users)', value: 25, color: 'from-blue-500 to-purple-500', width: '55%' },
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
                      <span className="text-sm font-bold text-gray-900">{item.value}%</span>
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

          {/* Scaling Timeline Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Scaling Timeline & Milestones</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="relative h-48">
                <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                  {/* Grid lines */}
                  {[0, 30, 60, 90, 120, 150].map((y, i) => (
                    <line key={i} x1="0" y1={y} x2="400" y2={y} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4,4" />
                  ))}
                  {/* Scaling curve */}
                  <motion.polyline
                    points="0,140 80,120 160,100 240,80 320,60 400,40"
                    fill="none"
                    stroke="url(#scalingGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="scalingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  {/* Milestones */}
                  {[
                    { x: 0, y: 140, month: 'Month 0', label: 'Pilot' },
                    { x: 80, y: 120, month: 'Month 2', label: 'Dept' },
                    { x: 160, y: 100, month: 'Month 4', label: 'Division' },
                    { x: 240, y: 80, month: 'Month 6', label: 'Scale' },
                    { x: 320, y: 60, month: 'Month 8', label: 'Enterprise' },
                    { x: 400, y: 40, month: 'Month 12', label: 'Mature' },
                  ].map((point, index) => (
                    <motion.g key={index}>
                      <motion.circle
                        cx={point.x}
                        cy={point.y}
                        r="8"
                        fill="#10B981"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.15 }}
                      />
                      <text x={point.x} y={point.y - 15} textAnchor="middle" className="text-xs font-bold fill-gray-700">
                        {point.month}
                      </text>
                    </motion.g>
                  ))}
                </svg>
              </div>
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

