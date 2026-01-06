'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import QuizResults from './QuizResults'

const questions = [
  {
    id: 1,
    question: 'How many AI tools is your company actively using?',
    options: [
      { text: '0 tools', points: 0 },
      { text: '1-2 tools', points: 10 },
      { text: '3-5 tools', points: 20 },
      { text: '6-10 tools', points: 30 },
      { text: '10-20 tools', points: 40 },
      { text: '20+ tools', points: 50 },
    ],
  },
  {
    id: 2,
    question: 'What percentage of your team uses AI tools daily?',
    options: [
      { text: '0%', points: 0 },
      { text: 'Less than 10%', points: 10 },
      { text: '10-30%', points: 20 },
      { text: '30-60%', points: 30 },
      { text: '60-85%', points: 40 },
      { text: '85%+', points: 50 },
    ],
  },
  {
    id: 3,
    question: 'Do you have a dedicated AI budget?',
    options: [
      { text: 'No budget at all', points: 0 },
      { text: "We're thinking about it", points: 10 },
      { text: 'Small pilot budget allocated', points: 20 },
      { text: 'Clear quarterly budget', points: 30 },
      { text: 'Annual AI budget with clear allocation', points: 40 },
      { text: 'Significant R&D budget for AI innovation', points: 50 },
    ],
  },
  {
    id: 4,
    question: 'How is AI integrated in your business strategy?',
    options: [
      { text: 'Not mentioned at all', points: 0 },
      { text: 'Discussed occasionally', points: 10 },
      { text: 'On our roadmap for this year', points: 20 },
      { text: 'Part of quarterly strategic reviews', points: 30 },
      { text: 'Core part of business strategy', points: 40 },
      { text: 'AI is our business model', points: 50 },
    ],
  },
  {
    id: 5,
    question: "How do you measure AI's impact?",
    options: [
      { text: "We don't measure anything yet", points: 0 },
      { text: 'Rough estimates only', points: 10 },
      { text: 'Basic metrics tracked monthly', points: 20 },
      { text: 'Clear ROI calculation with dashboard', points: 30 },
      { text: 'Comprehensive KPI tracking across all AI implementations', points: 40 },
      { text: 'Real-time AI performance monitoring at scale', points: 50 },
    ],
  },
  {
    id: 6,
    question: "What's your data infrastructure like?",
    options: [
      { text: 'Data scattered across Excel/multiple systems', points: 0 },
      { text: 'Basic database setup', points: 10 },
      { text: 'Centralized database, some organization', points: 20 },
      { text: 'Well-organized data warehouse', points: 30 },
      { text: 'Advanced data pipelines and governance', points: 40 },
      { text: 'Enterprise data lake with real-time processing', points: 50 },
    ],
  },
  {
    id: 7,
    question: 'Do you have AI governance policies?',
    options: [
      { text: 'No policies at all', points: 0 },
      { text: "We're thinking about creating some", points: 10 },
      { text: 'Basic usage guidelines', points: 20 },
      { text: 'Documented AI policies and ethics guidelines', points: 30 },
      { text: 'Comprehensive AI governance framework with compliance', points: 40 },
      { text: 'AI ethics board and industry-leading governance', points: 50 },
    ],
  },
  {
    id: 8,
    question: 'How integrated is AI in your customer experience?',
    options: [
      { text: 'No AI customer touchpoints', points: 0 },
      { text: 'Considering adding a chatbot', points: 10 },
      { text: 'Basic chatbot on website', points: 20 },
      { text: 'AI across multiple customer touchpoints', points: 30 },
      { text: 'Personalized AI-powered customer journeys', points: 40 },
      { text: 'AI is our core customer experience differentiator', points: 50 },
    ],
  },
  {
    id: 9,
    question: 'Do you build custom AI solutions?',
    options: [
      { text: 'No, we don\'t use any AI', points: 0 },
      { text: 'No, we only use off-the-shelf tools', points: 10 },
      { text: 'Customizing existing tools slightly', points: 20 },
      { text: 'Building some custom integrations', points: 30 },
      { text: 'Developing custom AI models for our needs', points: 40 },
      { text: 'Creating proprietary AI technology/products', points: 50 },
    ],
  },
  {
    id: 10,
    question: 'Is your company contributing to AI innovation?',
    options: [
      { text: 'Not at all', points: 0 },
      { text: 'We follow AI trends', points: 10 },
      { text: 'We share our AI learnings internally', points: 20 },
      { text: 'We publish case studies occasionally', points: 30 },
      { text: 'We speak at industry events and share knowledge', points: 40 },
      { text: 'We publish research, contribute to open source, and lead AI standards', points: 50 },
    ],
  },
]

export default function AssessmentQuiz() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [totalScore, setTotalScore] = useState(0)

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers, points]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const score = newAnswers.reduce((sum, points) => sum + points, 0)
      setTotalScore(score)
      setShowResults(true)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    return <QuizResults score={totalScore} />
  }

  return (
    <section id="assessment-quiz" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Find Your <span className="gradient-text">AI Maturity Level</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Answer 10 quick questions to discover where you stand
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-heading font-semibold text-gray-700">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-heading font-semibold text-gray-700">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option.points)}
                    className="w-full p-4 md:p-6 text-left bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-body text-gray-800 group-hover:text-blue-600 transition-colors">
                        {option.text}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}


