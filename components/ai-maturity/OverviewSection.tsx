'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, TrendingUp, Lightbulb } from 'lucide-react'

export default function OverviewSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="overview" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Understanding AI <span className="gradient-text">Maturity</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-body">
              Most businesses struggle to understand where they stand in their AI journey. Our AI Maturity Model provides a clear framework to assess your current position and chart your path forward. Whether you're just starting or already advanced, this model helps you identify gaps and opportunities for growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Target,
                title: 'Clear Assessment',
                description: 'Understand exactly where your business stands with our comprehensive framework',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: TrendingUp,
                title: 'Growth Roadmap',
                description: 'Get a personalized path forward with actionable steps and timelines',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Lightbulb,
                title: 'Strategic Insights',
                description: 'Identify opportunities and gaps to accelerate your AI transformation',
                color: 'from-pink-500 to-rose-500',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-body">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

