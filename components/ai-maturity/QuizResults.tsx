'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Download, Clock, DollarSign, Target, TrendingUp, Crown, BookOpen, Users, Zap, FlaskConical } from 'lucide-react'

const levelInfo = [
  {
    name: 'AI Unaware',
    icon: BookOpen,
    color: '#FF4444',
    range: [0, 50],
    message: "You're just starting your AI journey. Don't worry—every expert was once a beginner!",
  },
  {
    name: 'AI Curious',
    icon: Users,
    color: '#FF8C00',
    range: [51, 100],
    message: "You're exploring AI possibilities. Time to move from research to action!",
  },
  {
    name: 'AI Experimenting',
    icon: FlaskConical,
    color: '#FFD700',
    range: [101, 200],
    message: "You've started implementing AI. Keep experimenting and learning!",
  },
  {
    name: 'AI Adopting',
    icon: TrendingUp,
    color: '#90EE90',
    range: [201, 300],
    message: "AI is becoming part of your operations. Great progress!",
  },
  {
    name: 'AI Integrated',
    icon: Target,
    color: '#228B22',
    range: [301, 400],
    message: "AI is deeply embedded in your business. You're a leader!",
  },
  {
    name: 'AI-First Company',
    icon: Crown,
    color: '#006400',
    range: [401, 500],
    message: "AI is at your core. You're setting industry standards!",
  },
]

interface QuizResultsProps {
  score: number
}

export default function QuizResults({ score }: QuizResultsProps) {
  const userLevel = levelInfo.find(level => score >= level.range[0] && score <= level.range[1]) || levelInfo[0]
  const Icon = userLevel.icon
  const levelNumber = levelInfo.indexOf(userLevel)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
                style={{ backgroundColor: userLevel.color }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              >
                <Icon className="w-12 h-12 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
                You are at <span style={{ color: userLevel.color }}>Level {levelNumber}</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-4" style={{ color: userLevel.color }}>
                {userLevel.name}
              </h3>
              <p className="text-lg text-gray-600 font-body">{userLevel.message}</p>
              <div className="mt-6 inline-block px-6 py-3 bg-gray-100 rounded-full">
                <span className="text-2xl font-bold text-gray-900">Score: {score}/500</span>
              </div>
            </div>

            {/* Strengths */}
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span>Your Strengths</span>
              </h3>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-body">You've completed the assessment and understand your current position</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-body">Awareness is the first step to transformation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-body">You're ready to take the next step forward</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Target className="w-6 h-6 text-blue-600" />
                <span>Your Roadmap to Level {levelNumber + 1}</span>
              </h3>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-700 font-body mb-4">
                  To advance to the next level, focus on these key areas:
                </p>
                <ul className="space-y-3">
                  {[
                    'Identify your biggest AI opportunity',
                    'Allocate budget for AI initiatives',
                    'Start with one use case and prove ROI',
                    'Build internal AI capabilities',
                    'Measure and track your progress',
                  ].map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 font-body">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Wins */}
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Zap className="w-6 h-6 text-yellow-600" />
                <span>Quick Wins You Can Achieve Now</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Implement a simple chatbot',
                  'Automate email responses',
                  'Use AI for content creation',
                  'Add AI-powered analytics',
                ].map((win, index) => (
                  <div key={index} className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-yellow-600" />
                      <span className="font-body text-gray-700">{win}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <motion.button
                className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-heading font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Download Your Roadmap (PDF)</span>
              </motion.button>
              <motion.a
                href="#contact"
                className="flex-1 px-8 py-4 bg-white text-gray-800 rounded-xl font-heading font-semibold text-lg border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


