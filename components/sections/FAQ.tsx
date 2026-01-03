'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'What is Artificial Intelligence and how does StratgenAI use it?',
    answer: 'Artificial Intelligence (AI) refers to computer systems that can perform tasks typically requiring human intelligence, such as learning, reasoning, and problem-solving. StratgenAI leverages advanced AI technologies including machine learning, natural language processing, and intelligent automation to create solutions that help businesses automate processes, enhance productivity, and drive innovation. Our AI systems are designed to understand context, learn from data, and make intelligent decisions.'
  },
  {
    id: 2,
    question: 'How does AI benefit my business?',
    answer: 'AI can transform your business by automating repetitive tasks, providing data-driven insights, improving customer experiences, and optimizing operations. StratgenAI\'s AI solutions help reduce operational costs, increase efficiency, enable 24/7 customer support through intelligent chatbots, and make better business decisions through predictive analytics. Our AI tools are designed to scale with your business and adapt to changing needs.'
  },
  {
    id: 3,
    question: 'What AI technologies does StratgenAI specialize in?',
    answer: 'StratgenAI specializes in multiple AI technologies including Natural Language Processing (NLP) for chatbots and language understanding, Machine Learning for predictive analytics and pattern recognition, Intelligent Automation for process optimization, and Business Intelligence AI for data analysis and insights. Our team combines these technologies to create comprehensive AI solutions tailored to your business needs.'
  },
  {
    id: 4,
    question: 'Is AI safe and secure for business use?',
    answer: 'Yes, StratgenAI prioritizes security and safety in all our AI implementations. We follow industry best practices for data encryption, secure cloud infrastructure, and compliance with data protection regulations. Our AI systems are designed with privacy-by-design principles, ensuring that sensitive business data is protected. We also provide transparent AI solutions where you understand how decisions are made.'
  },
  {
    id: 5,
    question: 'Can AI replace human employees?',
    answer: 'No, StratgenAI\'s approach is to augment human capabilities, not replace them. Our AI solutions are designed to handle repetitive, time-consuming tasks, allowing your team to focus on strategic, creative, and relationship-building work. AI acts as a powerful assistant that enhances human productivity and decision-making, leading to better outcomes for both employees and the business.'
  },
  {
    id: 6,
    question: 'How does StratgenAI\'s AI chatbot (Keirō) work?',
    answer: 'Keirō uses advanced Natural Language Processing (NLP) and machine learning algorithms to understand user queries in multiple languages, even with spelling mistakes or grammatical errors. It analyzes the intent behind questions, searches through our comprehensive knowledge base, and provides accurate, contextually relevant responses. Keirō continuously learns and improves from interactions to deliver better customer experiences.'
  },
  {
    id: 7,
    question: 'What industries can benefit from AI solutions?',
    answer: 'AI solutions from StratgenAI benefit various industries including Healthcare (patient care automation, medical data analysis), Retail (inventory management, customer personalization), Fintech (fraud detection, financial analytics), E-commerce (recommendation systems, supply chain optimization), and many more. Our AI solutions are customizable to meet the specific challenges and requirements of each industry vertical.'
  },
  {
    id: 8,
    question: 'How long does it take to implement AI solutions?',
    answer: 'Implementation time varies based on the complexity and scope of the AI solution. Simple AI chatbot integrations can be deployed in weeks, while comprehensive AI platforms may take a few months. StratgenAI works efficiently with agile methodologies to deliver value quickly. We provide detailed timelines during our initial consultation based on your specific requirements and business goals.'
  },
  {
    id: 9,
    question: 'What makes StratgenAI\'s AI different from other providers?',
    answer: 'StratgenAI stands out by creating AI solutions that "speak your language" - from Silent Gen to Gen Alpha. We focus on making AI accessible, user-friendly, and practical for all generations. Our AI systems are designed with a deep understanding of business needs, combining cutting-edge technology with real-world applicability. We prioritize transparency, explainability, and ethical AI practices in all our solutions.'
  },
  {
    id: 10,
    question: 'Do I need technical expertise to use StratgenAI\'s AI solutions?',
    answer: 'No, StratgenAI designs AI solutions to be user-friendly and intuitive. Our platforms like Keirō and Stratflow are built with non-technical users in mind, featuring simple interfaces and clear workflows. We provide comprehensive training and support to ensure your team can effectively use and benefit from our AI tools without requiring deep technical knowledge.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6"
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about StratgenAI and our services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group"
                whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-base md:text-lg lg:text-xl font-heading font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-blue-600 transition-colors" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-5 md:pb-6 pt-0">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
