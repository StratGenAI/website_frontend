'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, ChevronUp, XCircle, Lightbulb, FlaskConical, TrendingUp, Target, Crown, CheckCircle2, AlertCircle, Clock, DollarSign, Users, ArrowRight } from 'lucide-react'

const levels = [
  {
    number: 0,
    name: 'AI Unaware',
    icon: XCircle,
    color: '#FF4444',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    gradient: 'from-red-500 to-rose-500',
    content: {
      whatItMeans: "Your business has no AI implementation and limited awareness of AI's potential. Operations are entirely manual with traditional processes.",
      characteristics: [
        'Zero AI tools or automation',
        'All processes are manual',
        'No AI strategy or roadmap',
        'Team has minimal AI knowledge',
        'No dedicated budget for AI initiatives',
      ],
      commonSigns: [
        'Using Excel/spreadsheets for all data management',
        'Customer queries handled 100% manually',
        'No chatbots or automation anywhere',
        'Leadership says "AI is too expensive" or "We\'re not ready"',
        'Data is scattered across multiple systems',
        'Decisions based purely on gut feeling',
      ],
      businessImpact: [
        'High operational costs (30-40% more than competitors)',
        'Slow response times (24-48 hours average)',
        'Limited scalability potential',
        'Employee burnout from repetitive tasks',
        'Losing customers to faster competitors',
        'Missing revenue opportunities',
      ],
      realWorldExample: 'A local retail chain with 5 stores managing inventory via Excel sheets, taking customer orders on phone/WhatsApp, and manually tracking sales. Monthly operational cost: ₹8-10 lakhs with 20% going to repetitive manual work.',
      whatYouNeed: [
        'Education First: AI awareness workshops for leadership (₹20K-50K)',
        'Quick Wins: Identify 2-3 processes that waste most time',
        'Budget Allocation: Start with ₹50K-1L per month',
        'Mindset Shift: Leadership buy-in is critical',
        'Basic Tools: Start with no-code automation tools',
      ],
      investment: '₹50K-2L (first 3 months)',
      timeToNext: '3-6 months',
      difficulty: 'Easy (just need to start)',
      firstSteps: [
        'Attend 2-3 AI webinars or workshops',
        'Identify one painful manual process',
        'Research 3 simple AI tools that could help',
      ],
    },
  },
  {
    number: 1,
    name: 'AI Curious',
    icon: Lightbulb,
    color: '#FF8C00',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    gradient: 'from-orange-500 to-amber-500',
    content: {
      whatItMeans: "You're exploring AI possibilities and gathering information but haven't implemented anything yet. You're in the research phase.",
      characteristics: [
        'Actively researching AI solutions',
        'Attended webinars, read articles, watched demos',
        'Discussed AI in leadership meetings',
        'Small pilot budget allocated (but not spent)',
        'Compared 2-5 vendors',
        'Downloaded whitepapers and case studies',
      ],
      commonSigns: [
        'Saying "We\'re thinking about implementing AI"',
        'Got quotes from multiple vendors but haven\'t decided',
        'Created a small "innovation committee"',
        'Bookmarked 20+ AI tool websites',
        'Team asks "When are we getting AI?"',
        'Analysis paralysis - too many options',
      ],
      businessImpact: [
        'Still losing to AI-enabled competitors',
        'Missing 15-20% efficiency gains',
        'Employee frustration with outdated tools',
        'Potential customers expect AI-powered service',
        'Opportunities slipping away monthly',
      ],
      realWorldExample: 'A digital marketing agency that\'s been "researching" AI writing tools for 6 months. They\'ve watched demos of Jasper, Copy.ai, and ChatGPT but haven\'t subscribed to any. Meanwhile, their competitors are producing content 3x faster.',
      whatYouNeed: [
        'Clear Use Case: Pick ONE specific problem to solve',
        'Proof of Concept: 30-day trial with one tool',
        'Success Metrics: Define what "success" looks like',
        'Quick Decision: Stop researching, start testing',
        'Risk Assessment: Calculate cost of NOT starting',
      ],
      investment: '₹1-3L (first implementation)',
      timeToNext: '2-4 months',
      difficulty: 'Medium (decision paralysis is the enemy)',
      firstSteps: [
        'Week 1: Choose ONE use case (customer service OR content OR data analysis)',
        'Week 2: Select 2 vendors and request trials',
        'Week 3: Run parallel trial with small team',
        'Week 4: Make decision and purchase',
      ],
    },
  },
  {
    number: 2,
    name: 'AI Experimenting',
    icon: FlaskConical,
    color: '#FFD700',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    gradient: 'from-yellow-500 to-amber-500',
    content: {
      whatItMeans: "You've implemented 1-2 AI tools and are actively testing them. Results are mixed but you're learning fast.",
      characteristics: [
        '1-3 AI tools actively in use',
        '10-20% of team trained and using AI',
        'Basic automation implemented',
        'Measuring early results',
        'Some skepticism still exists',
        'Learning through trial and error',
      ],
      commonSigns: [
        'Chatbot live on website (50% accuracy)',
        'Using ChatGPT for content creation',
        'Basic email sequences automated',
        '2-3 team members are AI champions',
        'Monthly review includes AI metrics',
        'Still figuring out best practices',
      ],
      businessImpact: [
        '15-25% efficiency improvement in automated areas',
        '₹50K-1L monthly cost savings',
        'Customer response time reduced by 30-40%',
        'Some processes still manual',
        'Inconsistent results across teams',
        'ROI becoming visible but not consistent',
      ],
      realWorldExample: 'An e-commerce company using AI chatbot for customer queries (handles 40% successfully), automated abandoned cart emails (12% recovery rate), and using AI for product descriptions. Monthly AI spend: ₹75K, Savings: ₹1.5L, Net benefit: ₹75K/month.',
      whatYouNeed: [
        'Change Management: Address team concerns openly',
        'Training Programs: Structured AI training for all teams',
        'Integration Support: Connect AI tools with existing systems',
        'Performance Tracking: Dashboard showing AI impact',
        'Expand Use Cases: Add 2-3 more AI applications',
        'Data Cleanup: Improve data quality for better AI results',
      ],
      investment: '₹3-6L (6 months)',
      timeToNext: '4-8 months',
      difficulty: 'Medium-High (scaling is challenging)',
      firstSteps: [
        'Month 1-2: Train remaining 80% of team',
        'Month 3-4: Add AI to 2 more departments',
        'Month 5-6: Integrate all AI tools',
        'Month 7-8: Optimize and measure comprehensive ROI',
      ],
    },
  },
  {
    number: 3,
    name: 'AI Adopting',
    icon: TrendingUp,
    color: '#90EE90',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    gradient: 'from-green-400 to-emerald-500',
    content: {
      whatItMeans: 'AI is now embedded across multiple departments. You have clear processes, measurable ROI, and company-wide adoption.',
      characteristics: [
        '4-7 AI tools actively used',
        '50-70% of team trained and using AI daily',
        'Dedicated AI budget (₹5-15L annually)',
        'Clear ROI documented',
        'AI in strategic planning discussions',
        'Some custom solutions built',
      ],
      commonSigns: [
        'AI mentioned in every department meeting',
        'Customer service 70% automated',
        'Sales team uses AI for lead scoring',
        'Marketing runs AI-powered campaigns',
        'Finance uses predictive analytics',
        'HR has AI-powered recruitment',
      ],
      businessImpact: [
        '30-50% efficiency improvement across operations',
        '₹2-5L monthly measurable savings',
        '40-60% faster time-to-market',
        'Customer satisfaction up 25-35%',
        'Employee productivity up 35%',
        'Competitive advantage visible',
      ],
      realWorldExample: 'A SaaS company with 50 employees using AI for: customer support (80% automation), sales lead scoring (40% higher conversion), content marketing (5x output), code assistance (30% faster development), HR screening (50% time saved). Monthly AI investment: ₹4L, Monthly impact: ₹12L, Net ROI: 3x.',
      whatYouNeed: [
        'Custom AI Development: Build proprietary models',
        'API Integrations: Connect everything seamlessly',
        'Data Infrastructure: Upgrade databases and pipelines',
        'AI Governance Framework: Policies and ethics board',
        'Advanced Analytics: Predictive and prescriptive AI',
        'Talent Acquisition: Hire AI specialists',
      ],
      investment: '₹10-25L (annual)',
      timeToNext: '6-12 months',
      difficulty: 'High (custom development needed)',
      firstSteps: [
        'Quarter 1: Audit current AI stack, identify gaps',
        'Quarter 2: Begin custom AI development',
        'Quarter 3: Implement advanced integrations',
        'Quarter 4: Launch AI-powered product features',
      ],
    },
  },
  {
    number: 4,
    name: 'AI Integrated',
    icon: Target,
    color: '#228B22',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    gradient: 'from-green-600 to-emerald-600',
    content: {
      whatItMeans: 'AI is deeply embedded in your core business operations. You\'re building custom solutions and AI is part of your competitive moat.',
      characteristics: [
        '10-20 AI implementations across all functions',
        '80-90% team uses AI tools daily',
        'Custom AI models and algorithms',
        'AI-driven business strategy',
        'Proprietary AI technology',
        'Industry recognition for AI innovation',
      ],
      commonSigns: [
        'Every department has AI-powered workflows',
        'Building your own AI models',
        'AI in your product features',
        'Speaking at AI conferences',
        'Other companies study your AI implementation',
        'Recruiting AI talent aggressively',
      ],
      businessImpact: [
        '50-70% efficiency improvement',
        '₹10-20L+ monthly measurable impact',
        'Market leadership in your category',
        'Innovation advantage over competitors',
        'Premium pricing power',
        'Attracting top talent',
      ],
      realWorldExample: 'A fintech company with 200 employees using: custom fraud detection AI (99.2% accuracy), personalized investment recommendations, automated KYC (95% straight-through processing), AI risk assessment, chatbot handling 90% queries, predictive customer lifetime value. Annual AI investment: ₹2.5 crore, Annual impact: ₹8+ crore, ROI: 320%.',
      whatYouNeed: [
        'AI Ethics Framework: Responsible AI practices',
        'Continuous Innovation: R&D investment (10-15% of AI budget)',
        'Talent Development: Upskill team continuously',
        'Strategic Partnerships: Collaborate with AI leaders',
        'Thought Leadership: Share knowledge publicly',
        'Governance Structure: AI steering committee',
      ],
      investment: '₹50L-1Cr+ (annual)',
      timeToNext: '12-18 months',
      difficulty: 'Very High (elite territory)',
      firstSteps: [
        'Quarterly AI strategy reviews',
        'Bi-annual tech stack upgrades',
        'Continuous team training',
        'Industry collaboration',
      ],
    },
  },
  {
    number: 5,
    name: 'AI-First Company',
    icon: Crown,
    color: '#006400',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-400',
    gradient: 'from-green-700 to-emerald-700',
    content: {
      whatItMeans: 'AI is at the very core of your business model. You\'re not just using AI—you\'re creating AI products, setting industry standards, and leading the AI revolution in your sector.',
      characteristics: [
        '20-50+ AI implementations',
        '95%+ team AI-powered daily',
        'Proprietary AI is your competitive moat',
        'Building AI products for others',
        'Industry thought leader',
        'Contributing to AI research/standards',
      ],
      commonSigns: [
        'Your core product IS AI',
        'Other companies license your AI',
        'Team includes AI PhDs and researchers',
        'Publishing research papers',
        'AI ethics board and governance',
        'Setting industry AI standards',
        'Media coverage for AI innovation',
        'Speaking at major AI conferences globally',
      ],
      businessImpact: [
        '70-90% operational efficiency vs traditional companies',
        'AI drives new revenue streams (₹1Cr+/month)',
        'Market disruption capability',
        'Sustainable competitive advantage',
        'Premium brand positioning',
        'Attracting world-class AI talent',
      ],
      realWorldExample: 'Examples: OpenAI (building foundational AI models), Tesla (AI-driven autonomous vehicles), Netflix (recommendation AI as core product), Shopify (AI-powered commerce platform). Your company could be the next example in your industry!',
      whatYouNeed: [
        'Never stop innovating (20% time for experiments)',
        'Acquire AI startups strategically',
        'Global talent acquisition',
        'Massive R&D investment',
        'Open innovation approach',
        'Strong AI ethics stance',
        'Community building',
        'Knowledge sharing',
      ],
      investment: '₹2Cr-10Cr+ (annual)',
      timeToNext: 'Continuous evolution',
      difficulty: 'Elite (industry leader)',
      firstSteps: [
        'Weekly AI innovation sprints',
        'Monthly AI town halls',
        'Quarterly strategy pivots',
        'Annual technology refresh',
      ],
    },
  },
]

export default function MaturityLevels() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedLevel, setExpandedLevel] = useState<number | null>(null)

  const toggleLevel = (levelNumber: number) => {
    setExpandedLevel(expandedLevel === levelNumber ? null : levelNumber)
  }

  return (
    <section id="maturity-levels" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6">
              The 6 <span className="gradient-text">Maturity Levels</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Explore each level to understand where you stand and what it takes to advance
            </p>
          </motion.div>

          <div className="space-y-4">
            {levels.map((level, index) => {
              const Icon = level.icon
              const isExpanded = expandedLevel === level.number

              return (
                <motion.div
                  key={level.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl border-2 ${level.borderColor} ${level.bgColor} overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <button
                    onClick={() => toggleLevel(level.number)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center space-x-4 md:space-x-6 flex-1">
                      <div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        style={{ backgroundColor: level.color }}
                      >
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-3xl md:text-4xl font-black text-gray-900">
                            Level {level.number}
                          </span>
                          <span
                            className="text-xl md:text-2xl font-heading font-bold"
                            style={{ color: level.color }}
                          >
                            {level.name}
                          </span>
                        </div>
                        <p className="text-gray-600 font-body text-sm md:text-base">
                          {level.content.whatItMeans}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4">
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-600 group-hover:translate-y-1 transition-transform" />
                      )}
                    </div>
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
                        <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6">
                          {/* What It Means */}
                          <div>
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">What It Means</h3>
                            <p className="text-gray-700 font-body">{level.content.whatItMeans}</p>
                          </div>

                          {/* Characteristics */}
                          <div>
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">Characteristics</h3>
                            <ul className="space-y-2">
                              {level.content.characteristics.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 font-body">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Common Signs */}
                          <div>
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">Common Signs You're Here</h3>
                            <ul className="space-y-2">
                              {level.content.commonSigns.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 font-body">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Business Impact */}
                          <div>
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">Business Impact</h3>
                            <ul className="space-y-2">
                              {level.content.businessImpact.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 font-body">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Real World Example */}
                          <div className="bg-white rounded-xl p-4 border border-gray-200">
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Real-World Example</h3>
                            <p className="text-gray-700 font-body italic">{level.content.realWorldExample}</p>
                          </div>

                          {/* What You Need */}
                          <div>
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">What You Need to Move Forward</h3>
                            <ul className="space-y-2">
                              {level.content.whatYouNeed.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 font-body">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key Metrics */}
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white rounded-xl p-4 border border-gray-200">
                              <div className="flex items-center space-x-2 mb-2">
                                <DollarSign className="w-5 h-5 text-green-600" />
                                <h4 className="font-heading font-semibold text-gray-900">Investment</h4>
                              </div>
                              <p className="text-gray-700 font-body">{level.content.investment}</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-gray-200">
                              <div className="flex items-center space-x-2 mb-2">
                                <Clock className="w-5 h-5 text-blue-600" />
                                <h4 className="font-heading font-semibold text-gray-900">Time to Next</h4>
                              </div>
                              <p className="text-gray-700 font-body">{level.content.timeToNext}</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-gray-200">
                              <div className="flex items-center space-x-2 mb-2">
                                <Users className="w-5 h-5 text-purple-600" />
                                <h4 className="font-heading font-semibold text-gray-900">Difficulty</h4>
                              </div>
                              <p className="text-gray-700 font-body">{level.content.difficulty}</p>
                            </div>
                          </div>

                          {/* First Steps */}
                          <div>
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">Your First Steps</h3>
                            <ul className="space-y-2">
                              {level.content.firstSteps.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    {idx + 1}
                                  </span>
                                  <span className="text-gray-700 font-body">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
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

