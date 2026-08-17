'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, FlaskConical, Rocket, Headphones } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description:
      'We map your goals, data, and workflows — whether customer engagement with Keirō or research pipelines with BioCopilot AI.',
  },
  {
    icon: FlaskConical,
    title: 'Pilot',
    description:
      'A focused proof-of-concept with clear metrics: response time, automation rate, or analysis turnaround.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description:
      'Production rollout with integrations, training, and guardrails aligned to your security and compliance needs.',
  },
  {
    icon: Headphones,
    title: 'Support',
    description:
      'Ongoing optimization, model updates, and strategic reviews so AI keeps delivering measurable value.',
  },
]

export default function HowWeWork() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="how-we-work" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_45%)]" />
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              A clear, proven path from idea to production — built for startups and enterprises alike.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} direction="up" delay={0.15 + index * 0.1}>
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-100 shadow-lg h-full"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <span className="absolute -top-3 -left-1 text-5xl font-display font-black text-purple-100">
                  {index + 1}
                </span>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center mb-5">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
