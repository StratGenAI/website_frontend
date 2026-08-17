'use client'

import { useInView } from 'react-intersection-observer'
import ScrollReveal from '@/components/ScrollReveal'

const integrations = [
  { name: 'Web & Mobile', category: 'Channels' },
  { name: 'WhatsApp', category: 'Channels' },
  { name: 'CRM & Helpdesk', category: 'Business' },
  { name: 'REST APIs', category: 'Technical' },
  { name: 'QIIME2', category: 'Research' },
  { name: 'Kraken / Bracken', category: 'Research' },
  { name: 'DESeq2', category: 'Research' },
  { name: 'Cloud Storage', category: 'Data' },
]

export default function Integrations() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-pink-50/50">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-black mb-3">
              Works With <span className="gradient-text">Your Stack</span>
            </h2>
            <p className="text-gray-600 font-body max-w-xl mx-auto">
              Keirō and BioCopilot AI connect to the tools your teams already use.
            </p>
          </div>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {integrations.map((item, i) => (
            <ScrollReveal key={item.name} direction="scale" delay={0.05 * i}>
              <div
                className={`px-5 py-3 rounded-xl border border-purple-200/60 bg-white/90 shadow-sm transition-opacity ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="block text-xs text-purple-600 font-heading font-semibold uppercase tracking-wide">
                  {item.category}
                </span>
                <span className="text-gray-800 font-heading font-bold">{item.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
