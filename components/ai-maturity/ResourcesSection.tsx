'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Lightbulb, Target, TrendingUp, Users, Zap } from 'lucide-react'

const resources = [
  {
    category: 'Level 0-1',
    title: 'AI Starter Guide',
    description: 'Learn the basics of AI implementation and get started on your journey',
    icon: Lightbulb,
    color: 'from-red-500 to-orange-500',
    href: '/ai-maturity-model/ai-starter-guide',
  },
  {
    category: 'Level 0-1',
    title: 'AI Tools Overview',
    description: 'Discover the best AI tools you can implement today for your business',
    icon: Zap,
    color: 'from-orange-500 to-yellow-500',
    href: '/ai-maturity-model/ai-tools-overview',
  },
  {
    category: 'Level 0-1',
    title: 'ROI Assessment',
    description: 'Understand the potential returns and benefits of AI for your business',
    icon: TrendingUp,
    color: 'from-yellow-500 to-green-500',
    href: '/ai-maturity-model/roi-assessment',
  },
  {
    category: 'Level 2-3',
    title: 'Scale-Up Strategy',
    description: 'Learn how to scale your AI initiatives from pilot to production',
    icon: Target,
    color: 'from-green-500 to-blue-500',
    href: '/ai-maturity-model/scale-up-strategy',
  },
  {
    category: 'Level 2-3',
    title: 'Integration Support',
    description: 'Get expert guidance on integrating AI into your existing systems',
    icon: Users,
    color: 'from-blue-500 to-purple-500',
    href: '/ai-maturity-model/integration-support',
  },
  {
    category: 'Level 4-5',
    title: 'AI Leadership',
    description: 'Strategic insights for advanced AI implementation and transformation',
    icon: Target,
    color: 'from-purple-500 to-pink-500',
    href: '/ai-maturity-model/ai-leadership',
  },
]

export default function ResourcesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
              Explore resources and services tailored to your AI maturity level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon

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
                  </div>

                  <motion.a
                    href={resource.href}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-heading font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      if (resource.href.startsWith('#')) {
                        e.preventDefault()
                        const element = document.querySelector(resource.href)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


