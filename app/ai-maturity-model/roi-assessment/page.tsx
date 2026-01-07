'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, TrendingUp, Calculator, Wallet, BarChart3, Target, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function ROIAssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 pt-32 md:pt-40">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-green-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/ai-maturity-model" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to AI Maturity Model
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-sm font-semibold opacity-90">Level 0-1</span>
              <h1 className="text-4xl md:text-5xl font-black">ROI Assessment</h1>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Understand the potential returns and benefits of AI for your business. Calculate your ROI and make data-driven decisions about AI investments.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why ROI Matters for AI Investments</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Before investing in AI, it's crucial to understand the potential return on investment. AI can deliver significant value, but measuring and predicting ROI helps you make informed decisions and set realistic expectations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This assessment guide will help you evaluate AI opportunities, calculate potential returns, and prioritize investments that deliver the highest value for your business.
              </p>
            </div>
          </motion.section>

          {/* ROI Components */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Components of AI ROI</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Wallet,
                  title: 'Cost Savings',
                  description: 'Reduced operational costs through automation',
                  examples: ['Labor cost reduction', 'Error reduction', 'Process efficiency'],
                },
                {
                  icon: TrendingUp,
                  title: 'Revenue Growth',
                  description: 'Increased sales and new revenue streams',
                  examples: ['Better lead conversion', 'Upselling opportunities', 'New market access'],
                },
                {
                  icon: BarChart3,
                  title: 'Productivity Gains',
                  description: 'Time saved and increased output',
                  examples: ['Faster task completion', '24/7 operations', 'Scalability'],
                },
                {
                  icon: Target,
                  title: 'Strategic Value',
                  description: 'Long-term competitive advantages',
                  examples: ['Market differentiation', 'Customer experience', 'Innovation capability'],
                },
              ].map((component, index) => {
                const Icon = component.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{component.title}</h3>
                    <p className="text-gray-600 mb-4">{component.description}</p>
                    <ul className="space-y-2">
                      {component.examples.map((example, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* ROI Calculation Framework with Visual Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">ROI Calculation Framework</h2>
            
            {/* ROI Comparison Chart */}
            <div className="mb-8 bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-lg font-heading font-bold mb-6 text-gray-900">ROI Comparison: With vs Without AI</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm font-heading font-semibold text-gray-600 mb-3">Without AI</div>
                  <div className="space-y-3">
                    {[
                      { label: 'Manual Costs', value: 60, color: 'bg-red-500' },
                      { label: 'Time Loss', value: 40, color: 'bg-orange-500' },
                      { label: 'Errors', value: 20, color: 'bg-yellow-500' },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-body text-gray-600">{item.label}</span>
                          <span className="text-xs font-heading font-semibold text-gray-700">{item.value}%</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                            className={`h-full ${item.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-heading font-semibold text-gray-600 mb-3">With AI</div>
                  <div className="space-y-3">
                    {[
                      { label: 'Automated Costs', value: 20, color: 'bg-green-500' },
                      { label: 'Time Saved', value: 10, color: 'bg-emerald-500' },
                      { label: 'Error Reduction', value: 5, color: 'bg-teal-500' },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-body text-gray-600">{item.label}</span>
                          <span className="text-xs font-heading font-semibold text-gray-700">{item.value}%</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                            className={`h-full ${item.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="text-center">
                  <div className="text-2xl font-display font-black text-green-700 mb-1">65% Cost Reduction</div>
                  <div className="text-sm font-body text-green-600">Average savings with AI implementation</div>
                </div>
              </div>
            </div>

            {/* Fun Bar Chart - ROI by Industry */}
            <div className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-lg">
              <h3 className="text-lg font-heading font-bold mb-6 text-gray-900 text-center">Average ROI by Industry</h3>
              <div className="space-y-4">
                {[
                  { industry: 'Healthcare', roi: 85, color: 'from-blue-500 to-cyan-500' },
                  { industry: 'E-commerce', roi: 75, color: 'from-purple-500 to-pink-500' },
                  { industry: 'Finance', roi: 70, color: 'from-green-500 to-emerald-500' },
                  { industry: 'Manufacturing', roi: 65, color: 'from-orange-500 to-red-500' },
                  { industry: 'Retail', roi: 60, color: 'from-yellow-500 to-orange-500' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-heading font-semibold text-gray-700">{item.industry}</span>
                      <span className="text-sm font-bold text-gray-900">{item.roi}% ROI</span>
                    </div>
                    <div className="h-6 bg-white/50 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.roi}%` }}
                        transition={{ duration: 1, delay: 1 + index * 0.15, type: 'spring' }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full shadow-md`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie Chart Visualization - Benefit Distribution */}
            <div className="mb-8 bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-lg font-heading font-bold mb-6 text-gray-900 text-center">AI Benefits Distribution</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center">
                  <div className="relative w-48 h-48 mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                      {[
                        { value: 40, color: '#3B82F6', label: 'Cost Savings' },
                        { value: 30, color: '#10B981', label: 'Time Saved' },
                        { value: 20, color: '#F59E0B', label: 'Revenue Growth' },
                        { value: 10, color: '#8B5CF6', label: 'Other Benefits' },
                      ].map((segment, index, array) => {
                        const previousSum = array.slice(0, index).reduce((sum, s) => sum + s.value, 0)
                        const percentage = segment.value
                        const circumference = 2 * Math.PI * 90
                        const offset = circumference - (previousSum / 100) * circumference
                        const dashArray = (percentage / 100) * circumference
                        return (
                          <circle
                            key={index}
                            cx="100"
                            cy="100"
                            r="90"
                            fill="none"
                            stroke={segment.color}
                            strokeWidth="20"
                            strokeDasharray={dashArray}
                            strokeDashoffset={offset}
                            className="transition-all duration-1000"
                            style={{ strokeLinecap: 'round' }}
                          />
                        )
                      })}
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-black text-gray-900">100%</div>
                        <div className="text-xs text-gray-600">Total Benefits</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { value: 40, color: '#3B82F6', label: 'Cost Savings', amount: '₹40L/year' },
                    { value: 30, color: '#10B981', label: 'Time Saved', amount: '₹30L/year' },
                    { value: 20, color: '#F59E0B', label: 'Revenue Growth', amount: '₹20L/year' },
                    { value: 10, color: '#8B5CF6', label: 'Other Benefits', amount: '₹10L/year' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                          <span className="text-sm font-bold text-gray-900">{item.amount}</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full mt-1">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Line Chart - ROI Over Time */}
            <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-lg">
              <h3 className="text-lg font-heading font-bold mb-6 text-gray-900 text-center">ROI Growth Over 12 Months</h3>
              <div className="relative h-64">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100, 125, 150, 175, 200].map((y, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={y}
                      x2="400"
                      y2={y}
                      stroke="#E5E7EB"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                    />
                  ))}
                  {/* ROI Line */}
                  <motion.polyline
                    points="0,180 50,160 100,140 150,120 200,100 250,80 300,60 350,50 400,40"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  {/* Data points */}
                  {[
                    { x: 0, y: 180, month: 'Month 0', roi: '0%' },
                    { x: 50, y: 160, month: 'Month 3', roi: '25%' },
                    { x: 100, y: 140, month: 'Month 6', roi: '50%' },
                    { x: 150, y: 120, month: 'Month 9', roi: '75%' },
                    { x: 200, y: 100, month: 'Month 12', roi: '100%' },
                  ].map((point, index) => (
                    <motion.circle
                      key={index}
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="#3B82F6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 2 + index * 0.2 }}
                    />
                  ))}
                </svg>
                {/* Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600 px-2">
                  <span>0</span>
                  <span>3</span>
                  <span>6</span>
                  <span>9</span>
                  <span>12 Months</span>
                </div>
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-600 py-2">
                  <span>200%</span>
                  <span>150%</span>
                  <span>100%</span>
                  <span>50%</span>
                  <span>0%</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-heading font-bold mb-4 text-gray-900">Step 1: Calculate Investment Costs</h3>
                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Software/Tool Costs</span>
                      <span className="font-semibold text-gray-900">₹X/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Implementation & Setup</span>
                      <span className="font-semibold text-gray-900">₹X (one-time)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Training & Onboarding</span>
                      <span className="font-semibold text-gray-900">₹X</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-3">
                      <span className="font-bold text-gray-900">Total Investment</span>
                      <span className="font-bold text-gray-900">₹X</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-heading font-bold mb-4 text-gray-900">Step 2: Estimate Benefits</h3>
                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Time Saved (hours/month)</span>
                      <span className="font-semibold text-gray-900">X hours × ₹Y/hour = ₹Z</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Cost Reduction</span>
                      <span className="font-semibold text-gray-900">₹X/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Revenue Increase</span>
                      <span className="font-semibold text-gray-900">₹X/month</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-3">
                      <span className="font-bold text-gray-900">Total Monthly Benefits</span>
                      <span className="font-bold text-gray-900">₹X</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-heading font-bold mb-4 text-gray-900">Step 3: Calculate ROI</h3>
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-2">Annual ROI</div>
                      <div className="text-4xl font-black text-green-600 mb-4">
                        {(12 * 1000 - 5000) / 5000 * 100}%
                      </div>
                      <div className="text-sm text-gray-600">
                        (Annual Benefits - Annual Investment) / Annual Investment × 100
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Common ROI Scenarios with Visual Funnel */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">Common AI ROI Scenarios</h2>
            
            {/* ROI Funnel Visualization */}
            <div className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-heading font-bold mb-6 text-gray-900 text-center">ROI Funnel: Investment to Returns</h3>
              <div className="max-w-md mx-auto space-y-2">
                {[
                  { label: 'Investment', value: 100, color: 'from-red-500 to-orange-500', width: '100%' },
                  { label: 'Month 1-3', value: 120, color: 'from-orange-500 to-yellow-500', width: '90%' },
                  { label: 'Month 4-6', value: 150, color: 'from-yellow-500 to-green-500', width: '75%' },
                  { label: 'Month 7-12', value: 200, color: 'from-green-500 to-blue-500', width: '60%' },
                  { label: 'Returns', value: 300, color: 'from-blue-500 to-purple-500', width: '45%' },
                ].map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-heading font-semibold text-gray-700">{stage.label}</span>
                      <span className="text-xs font-body text-gray-600">₹{stage.value * 80}</span>
                    </div>
                    <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: stage.width }}
                        transition={{ duration: 0.8, delay: 0.7 + index * 0.15 }}
                        className={`h-full bg-gradient-to-r ${stage.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  useCase: 'Customer Support Chatbot',
                  investment: '₹40,000/month',
                  benefits: 'Saves 20 hours/week of support time',
                  roi: '300%+ annual ROI',
                  timeframe: '3-6 months',
                },
                {
                  useCase: 'Email Automation',
                  investment: '₹16,000/month',
                  benefits: 'Increases email efficiency by 60%',
                  roi: '250%+ annual ROI',
                  timeframe: '1-2 months',
                },
                {
                  useCase: 'Document Processing AI',
                  investment: '₹64,000/month',
                  benefits: 'Processes 10x more documents',
                  roi: '400%+ annual ROI',
                  timeframe: '2-4 months',
                },
                {
                  useCase: 'Sales Forecasting AI',
                  investment: '₹48,000/month',
                  benefits: 'Improves sales accuracy by 30%',
                  roi: '200%+ annual ROI',
                  timeframe: '4-6 months',
                },
              ].map((scenario, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.useCase}</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <Wallet className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-gray-700"><strong>Investment:</strong> {scenario.investment}</span>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-gray-700"><strong>Benefits:</strong> {scenario.benefits}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl md:text-2xl font-display font-black text-green-600 mb-1">{scenario.roi}</div>
                      <div className="text-xs font-body text-gray-500">Payback: {scenario.timeframe}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Assess Your AI ROI?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our team can help you calculate the potential ROI for AI solutions specific to your business and guide you through the assessment process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Get Free ROI Assessment</span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all flex items-center space-x-2"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  )
}

