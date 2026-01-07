'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Zap, CheckCircle2, Star, TrendingUp, Wallet } from 'lucide-react'
import Link from 'next/link'

export default function AIToolsOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 pt-32 md:pt-40">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/ai-maturity-model" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors font-heading">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to AI Maturity Model
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-sm font-heading font-semibold opacity-90 block mb-2">Level 0-1</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black">AI Tools Overview</h1>
            </div>
          </div>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl font-body leading-relaxed">
            Discover the best AI tools you can implement today for your business. From customer service to content creation, find the right tools to accelerate your growth.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">Why AI Tools Matter</h2>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-body">
                The right AI tools can transform your business operations, automate repetitive tasks, and unlock new levels of productivity. With thousands of AI tools available, choosing the right ones for your business is crucial.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-body">
                This guide focuses on proven, accessible AI tools that businesses at Level 0-1 can implement quickly and see immediate results.
              </p>
            </div>
          </motion.section>

          {/* Tool Adoption Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">AI Tool Market Overview</h2>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200 shadow-lg mb-8">
              <h3 className="text-lg font-heading font-bold mb-6 text-gray-900 text-center">Tool Category Adoption Rates</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    { category: 'Customer Service', adoption: 78, color: 'from-blue-500 to-cyan-500' },
                    { category: 'Content & Marketing', adoption: 72, color: 'from-purple-500 to-pink-500' },
                    { category: 'Productivity', adoption: 68, color: 'from-green-500 to-emerald-500' },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">{item.category}</span>
                        <span className="text-sm font-bold text-gray-900">{item.adoption}%</span>
                      </div>
                      <div className="h-5 bg-white/50 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.adoption}%` }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    { category: 'Sales & CRM', adoption: 65, color: 'from-orange-500 to-red-500' },
                    { category: 'Data Analytics', adoption: 58, color: 'from-yellow-500 to-orange-500' },
                    { category: 'HR & Operations', adoption: 52, color: 'from-indigo-500 to-purple-500' },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">{item.category}</span>
                        <span className="text-sm font-bold text-gray-900">{item.adoption}%</span>
                      </div>
                      <div className="h-5 bg-white/50 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.adoption}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Tool Categories */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">Essential AI Tool Categories</h2>
            <div className="space-y-6">
              {[
                {
                  category: 'Customer Service & Support',
                  tools: [
                    { name: 'Chatbots', description: '24/7 automated customer support', useCase: 'Handle common queries, reduce response time' },
                    { name: 'Email Automation', description: 'Smart email routing and responses', useCase: 'Improve customer communication efficiency' },
                    { name: 'Help Desk AI', description: 'Intelligent ticket management', useCase: 'Prioritize and route support tickets automatically' },
                  ],
                },
                {
                  category: 'Content & Marketing',
                  tools: [
                    { name: 'Content Generators', description: 'AI-powered writing assistants', useCase: 'Create blog posts, social media content, emails' },
                    { name: 'Image Generators', description: 'Create visuals with AI', useCase: 'Generate marketing images and graphics' },
                    { name: 'SEO Tools', description: 'AI-driven SEO optimization', useCase: 'Improve search rankings and content quality' },
                  ],
                },
                {
                  category: 'Productivity & Operations',
                  tools: [
                    { name: 'Meeting Assistants', description: 'AI note-taking and summaries', useCase: 'Automatically transcribe and summarize meetings' },
                    { name: 'Calendar AI', description: 'Smart scheduling optimization', useCase: 'Optimize meeting times and reduce conflicts' },
                    { name: 'Document AI', description: 'Intelligent document processing', useCase: 'Extract data, summarize documents, automate workflows' },
                  ],
                },
                {
                  category: 'Sales & CRM',
                  tools: [
                    { name: 'Lead Scoring', description: 'AI-powered lead qualification', useCase: 'Identify high-value prospects automatically' },
                    { name: 'Sales Forecasting', description: 'Predictive sales analytics', useCase: 'Forecast revenue and identify opportunities' },
                    { name: 'Email Outreach', description: 'Personalized email campaigns', useCase: 'Automate and personalize sales outreach' },
                  ],
                },
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-gray-900">{category.category}</h3>
                  <div className="space-y-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="border-l-4 border-orange-500 pl-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-heading font-bold text-gray-900">{tool.name}</h4>
                            <p className="text-gray-600 text-sm font-body">{tool.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-gray-700 font-medium">Use Case: {tool.useCase}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Implementation Guide */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">How to Choose the Right Tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  step: '1',
                  title: 'Identify Your Needs',
                  description: 'List specific problems you want to solve or processes you want to improve.',
                },
                {
                  step: '2',
                  title: 'Set Your Budget',
                  description: 'Determine how much you can invest in AI tools monthly or annually.',
                },
                {
                  step: '3',
                  title: 'Start with Free Trials',
                  description: 'Test multiple tools before committing to ensure they fit your workflow.',
                },
                {
                  step: '4',
                  title: 'Check Integration',
                  description: 'Ensure tools integrate with your existing software and systems.',
                },
                {
                  step: '5',
                  title: 'Train Your Team',
                  description: 'Provide training so your team can effectively use the new tools.',
                },
                {
                  step: '6',
                  title: 'Measure Results',
                  description: 'Track metrics to ensure tools are delivering expected value.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 font-body">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ROI Comparison Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">ROI Comparison: Tool Categories</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="space-y-4">
                {[
                  { tool: 'Customer Service Tools', roi: 320, color: 'from-blue-500 to-cyan-500' },
                  { tool: 'Content Creation Tools', roi: 280, color: 'from-purple-500 to-pink-500' },
                  { tool: 'Productivity Tools', roi: 250, color: 'from-green-500 to-emerald-500' },
                  { tool: 'Sales & CRM Tools', roi: 220, color: 'from-orange-500 to-red-500' },
                  { tool: 'Analytics Tools', roi: 200, color: 'from-yellow-500 to-orange-500' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">{item.tool}</span>
                      <span className="text-sm font-bold text-gray-900">{item.roi}% ROI</span>
                    </div>
                    <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(item.roi / 350) * 100}%` }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.15, type: 'spring' }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full shadow-md`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ROI Considerations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200"
          >
            <div className="flex items-center mb-4">
              <Wallet className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Understanding ROI</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              When evaluating AI tools, consider both direct and indirect returns:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-3">Direct Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Time saved on repetitive tasks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reduced operational costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Increased sales and revenue</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-3">Indirect Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Improved customer satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Better decision-making with data insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Competitive advantage in your market</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-6 text-gray-900">Ready to Implement AI Tools?</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 font-body leading-relaxed">
              Our team can help you identify the best AI tools for your specific business needs and guide you through implementation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-heading font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-gray-900 rounded-xl font-heading font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
              </Link>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  )
}

