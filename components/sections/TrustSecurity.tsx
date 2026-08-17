'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Lock, FileCheck, Eye } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const items = [
  {
    icon: Shield,
    title: 'Research-first products',
    text: 'BioCopilot AI is for scientific research support only — not clinical diagnosis or medical advice.',
  },
  {
    icon: Lock,
    title: 'Secure by design',
    text: 'Industry-standard encryption for data in transit and access controls on production systems.',
  },
  {
    icon: FileCheck,
    title: 'Evidence-based AI',
    text: 'Dataset chat and reporting are built to cite uploaded data — reducing unsupported claims.',
  },
  {
    icon: Eye,
    title: 'Transparent process',
    text: 'Clear discovery → pilot → deploy steps so you always know what we build and why.',
  },
]

export default function TrustSecurity() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-blue-950" />
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
              Trust & <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Security</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-body">
              Built for teams who need credible AI — in business and in the lab.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-heading font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 font-body leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
