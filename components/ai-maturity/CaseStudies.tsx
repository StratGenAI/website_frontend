'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Clock, DollarSign, CheckCircle2 } from 'lucide-react'

const caseStudies = [
  {
    company: 'Manufacturing Company',
    industry: 'Auto Parts Manufacturer',
    startingLevel: 'Level 1 (AI Curious)',
    currentLevel: 'Level 4 (AI Integrated)',
    timeline: '18 months',
    challenge: 'Manual quality checks, high defect rate (8%), slow production',
    solutions: [
      'Month 1-3: Computer vision for quality inspection',
      'Month 4-6: Predictive maintenance AI',
      'Month 7-12: AI-powered supply chain optimization',
      'Month 13-18: Custom demand forecasting models',
    ],
    results: [
      { metric: 'Defect Rate', before: '8%', after: '0.8%', improvement: '90% reduction' },
      { metric: 'Production Efficiency', before: 'Baseline', after: '+45%', improvement: '45% increase' },
      { metric: 'Cost Savings', before: 'Baseline', after: '₹35L/month', improvement: 'Monthly savings' },
      { metric: 'ROI', before: 'N/A', after: '420%', improvement: 'Return on investment' },
    ],
    quote: '"We went from skeptics to believers in 6 months" - CTO',
  },
  {
    company: 'E-commerce Startup',
    industry: 'Fashion E-commerce',
    startingLevel: 'Level 0 (AI Unaware)',
    currentLevel: 'Level 3 (AI Adopting)',
    timeline: '12 months',
    challenge: 'Low conversion (1.2%), high cart abandonment (78%), manual customer service',
    solutions: [
      'Month 1-2: Chatbot for customer queries',
      'Month 3-5: AI product recommendations',
      'Month 6-8: Dynamic pricing algorithm',
      'Month 9-12: Personalized email campaigns',
    ],
    results: [
      { metric: 'Conversion Rate', before: '1.2%', after: '3.8%', improvement: '3.2x increase' },
      { metric: 'Cart Abandonment', before: '78%', after: '52%', improvement: '26% reduction' },
      { metric: 'Customer Service', before: '100% manual', after: '80% automated', improvement: 'Automation' },
      { metric: 'Revenue', before: 'Baseline', after: '2.3x', improvement: 'Revenue growth' },
    ],
    quote: '"AI transformed our business model completely" - Founder',
  },
  {
    company: 'Healthcare Clinic Chain',
    industry: 'Healthcare Services',
    startingLevel: 'Level 1 (AI Curious)',
    currentLevel: 'Level 3 (AI Adopting)',
    timeline: '14 months',
    challenge: 'Manual appointment scheduling, diagnosis assistance needed, admin overhead',
    solutions: [
      'AI-powered appointment scheduling',
      'Diagnosis assistance tools',
      'Admin process automation',
      'Patient data analytics',
    ],
    results: [
      { metric: 'Admin Time Saved', before: 'Baseline', after: '60%', improvement: 'Time reduction' },
      { metric: 'Patient Capacity', before: 'Baseline', after: '+35%', improvement: 'More patients' },
      { metric: 'Patient Satisfaction', before: '75%', after: '90%', improvement: '15% increase' },
    ],
    quote: '"Our staff can now focus on patient care, not paperwork" - Medical Director',
  },
]

export default function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Real Companies, <span className="gradient-text">Real Transformations</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
              See how businesses like yours transformed their operations with AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {study.company}
                  </h3>
                  <p className="text-gray-600 font-body text-sm mb-4">{study.industry}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1 text-blue-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-semibold">{study.startingLevel} → {study.currentLevel}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{study.timeline}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-heading font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-700 font-body text-sm">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-heading font-semibold text-gray-900 mb-2">Key Results</h4>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 font-body">{result.metric}:</span>
                        <span className="font-semibold text-gray-900">
                          {result.before} → {result.after}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 font-body text-sm italic">"{study.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


