'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const studies = [
  {
    title: 'Automated data pipeline',
    client: 'Energy sector client · Ahmedabad',
    product: 'Custom AI + automation',
    result: 'Faster processing, fewer manual errors',
    metric: 'End-to-end workflow automation',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Intelligent customer engagement',
    client: 'Consulting firm · Gujarat',
    product: 'Keirō',
    result: 'Streamlined client interactions',
    metric: '24/7 AI-assisted support',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Research acceleration (pilot)',
    client: 'Multi-omics research team',
    product: 'BioCopilot AI · Early access',
    result: 'Weeks of interpretation → structured reports in hours',
    metric: 'QIIME2 & taxonomy workflows',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
  },
]

export default function HomeCaseStudies() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/40">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Client <span className="gradient-text">Outcomes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Real projects. Measurable impact. Names anonymized where required by client agreement.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {studies.map((study, i) => (
            <ScrollReveal key={study.title} direction="up" delay={0.1 + i * 0.1}>
              <motion.article
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full flex flex-col"
                whileHover={{ y: -6 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center mb-5`}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs font-heading font-semibold text-purple-600 uppercase tracking-wide mb-2">
                  {study.product}
                </p>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{study.client}</p>
                <p className="text-gray-700 font-body flex-grow mb-4">{study.result}</p>
                <p className="text-sm font-heading font-semibold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  {study.metric}
                </p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/ai-maturity-model"
              className="inline-flex items-center gap-2 text-purple-600 font-heading font-bold hover:text-pink-600 transition-colors"
            >
              Explore AI Maturity Model
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
