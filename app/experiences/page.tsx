'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const experiences = [
  {
    title: 'Healthcare & Metabolomics Pipelines',
    badge: 'Life Sciences',
    description:
      'Built full metabolomics data pipelines — ingestion, cleaning, feature engineering, and model training — to predict clinical outcomes and accelerate research decisions.',
    highlights: [
      'Automated ETL across lab systems and cloud object storage',
      'Custom AI models for biomarker discovery and cohort stratification',
      'Interactive dashboards for clinicians with explainability built in',
    ],
  },
  {
    title: 'Enterprise Chatbots Delivered',
    badge: 'Conversational AI',
    description:
      'Designed and shipped production chatbots that handle support, onboarding, and knowledge retrieval with strong safety and observability.',
    highlights: [
      'Domain-tuned retrieval with guardrails and escalation routing',
      'Deployed across web + mobile with live feedback loops for quality',
      'Reduced median resolution time while lifting CSAT for clients',
    ],
  },
  {
    title: 'AI-Built Websites & Digital Experiences',
    badge: 'AI for Web',
    description:
      'Delivered marketing and product sites generated with AI-assisted design, content, and QA — from Figma-like ideation to production deployment.',
    highlights: [
      'Prompt-to-page workflows with automated copy, assets, and SEO hints',
      'Full Next.js/Tailwind delivery, integrated analytics, and A/B hooks',
      'Performance-focused builds with accessibility and lighthouse checks',
    ],
  },
  {
    title: 'RLHF & Safety Research',
    badge: 'Research',
    description:
      'Ran RLHF-style experiments to align model responses with brand tone, safety policies, and factuality on custom corpora.',
    highlights: [
      'Preference data pipelines, reward modeling, and evaluation harnesses',
      'Red-teaming and jailbreak resistance tuned for enterprise contexts',
      'Reporting loops to continuously improve response quality and trust',
    ],
  },
]

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-purple-50/30 pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-200 text-xs font-semibold text-gray-700"
          >
            Proven Delivery Across Domains
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900"
          >
            Experiences that ship and scale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From metabolomics AI to enterprise chatbots and AI-built web experiences, we pair
            production rigor with research depth so your teams move faster with confidence.
          </motion.p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, idx) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-200 p-6 sm:p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-gray-700 border border-gray-200">
                  {exp.badge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-3">
                {exp.title}
              </h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">{exp.description}</p>
              <ul className="space-y-2.5 text-gray-700 font-body text-sm sm:text-base">
                {exp.highlights.map((point) => (
                  <li key={point} className="flex items-start space-x-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </section>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-white/70 font-heading mb-2">
              Ready to explore?
            </p>
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2">Let’s build your next win</h3>
            <p className="text-white/80 max-w-xl font-body">
              Tell us your domain, data, and success metrics. We’ll share a concise plan with the fastest
              experiments to get you proof and momentum.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 font-heading font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Talk to us
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

