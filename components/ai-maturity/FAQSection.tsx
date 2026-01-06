'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How accurate is this assessment?',
    answer: 'Our AI Maturity Model is based on analyzing 500+ companies across industries. While your quiz result gives a strong indication, we recommend a detailed assessment for precision.',
  },
  {
    question: 'Can we skip levels?',
    answer: "While technically possible, we don't recommend it. Each level builds foundational capabilities needed for the next. Skipping can lead to implementation failures.",
  },
  {
    question: 'How long does it typically take to reach Level 5?',
    answer: 'Most companies take 3-5 years from Level 0 to Level 5, with aggressive investment and commitment. However, the journey is more important than the speed.',
  },
  {
    question: "What if we're between two levels?",
    answer: "That's common! Many companies have different maturity in different departments. Focus on bringing all areas to a consistent level before advancing.",
  },
  {
    question: 'Is Level 5 necessary for every business?',
    answer: 'No. Level 3-4 is sufficient for most businesses. Level 5 is for companies where AI IS the product or core differentiator.',
  },
  {
    question: "What's the typical ROI at each level?",
    answer: 'Level 2: 1.5-2x, Level 3: 2-3x, Level 4: 3-5x, Level 5: 5x+. However, these vary by industry and implementation quality.',
  },
  {
    question: 'Do you help companies move up levels?',
    answer: 'Yes! Based on your assessment, we can create a customized roadmap and implementation plan. Book a consultation to get started.',
  },
  {
    question: "What's the biggest mistake companies make?",
    answer: "Trying to do too much too fast. Start with one use case, prove ROI, then scale. Also, ignoring change management—AI adoption is 20% technology, 80% people.",
  },
]

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Everything you need to know about the AI Maturity Model
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isExpanded = expandedIndex === index

              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-heading font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0 group-hover:translate-y-1 transition-transform" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-700 font-body leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


