'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FlaskConical, MessageSquare, Globe, ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Healthcare & Metabolomics Pipelines',
    icon: FlaskConical,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Built comprehensive AI-powered metabolomics pipelines for healthcare research, enabling advanced data analysis and biomarker discovery. Our automated systems process complex biological data with precision and speed, revolutionizing how researchers analyze metabolomic patterns.',
    details: [
      'Automated metabolomics data processing workflows with 95% accuracy',
      'AI models for biomarker identification and disease prediction',
      'Real-time data analysis and interactive visualization dashboards',
      'Seamless integration with healthcare research platforms and databases',
      'Advanced pattern recognition in biological data using deep learning',
      'Scalable cloud infrastructure for large-scale data processing',
      'Custom algorithms for metabolite identification and quantification'
    ],
    technologies: ['Python', 'Machine Learning', 'Data Pipelines', 'Bioinformatics', 'TensorFlow', 'Cloud Computing'],
    impact: {
      icon: TrendingUp,
      text: 'Enabled researchers to process 10x more data in half the time'
    }
  },
  {
    id: 2,
    title: 'Enterprise Chatbots Delivered',
    icon: MessageSquare,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Delivered intelligent conversational AI chatbots for enterprise clients, automating customer support and enhancing user engagement. Our chatbots understand context, learn from interactions, and provide human-like responses across multiple languages and platforms.',
    details: [
      'Custom chatbot development tailored to specific business needs',
      'Multi-language support (English, Hindi, Hinglish, and more)',
      'Advanced NLP integration with context-aware responses',
      'Seamless integration with CRM, ERP, and existing business systems',
      '24/7 automated customer support with 90%+ query resolution',
      'Real-time analytics dashboard for performance monitoring',
      'Continuous learning and improvement through user interactions',
      'Voice and text support across web, mobile, and messaging platforms'
    ],
    technologies: ['NLP', 'Conversational AI', 'API Integration', 'Cloud Deployment', 'OpenAI', 'LangChain'],
    impact: {
      icon: Users,
      text: 'Reduced customer support costs by 60% while improving satisfaction'
    }
  },
  {
    id: 3,
    title: 'AI-Built Websites & Digital Experiences',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'Created cutting-edge websites and digital experiences powered by AI, delivering personalized user journeys and intelligent interactions. Our AI-driven approach ensures every visitor gets a unique, optimized experience that converts.',
    details: [
      'AI-driven content generation and dynamic optimization',
      'Personalized user experiences based on behavior and preferences',
      'Intelligent search with semantic understanding',
      'Smart recommendations engine for products and content',
      'Automated design and layout optimization for maximum engagement',
      'Real-time content adaptation and A/B testing',
      'Performance optimization with AI-powered caching and CDN',
      'Accessibility features enhanced with AI assistance'
    ],
    technologies: ['Next.js', 'AI/ML', 'Web Development', 'UX/UI Design', 'React', 'TypeScript', 'Tailwind CSS'],
    impact: {
      icon: Zap,
      text: 'Increased conversion rates by 45% through personalized experiences'
    }
  },
]

export default function ExperiencesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 md:pt-36 lg:pt-40 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 md:mb-4 px-4">
            Our Experiences
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Real-world projects and innovations that showcase our expertise in AI, healthcare, and digital transformation
          </p>
        </motion.div>

        {/* Different Card Layouts */}
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon
              
              // Different layouts for each card
              if (index === 0) {
                // Card 1: Left-aligned with large icon on left
                return (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`${experience.bgColor} ${experience.borderColor} border-2 rounded-xl md:rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-all relative overflow-hidden`}
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      {/* Large Icon on Left */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-xl`}>
                          <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3">
                          {experience.title}
                        </h3>
                        <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
                          {experience.description}
                        </p>
                        {experience.impact && (
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${experience.color} text-white mb-4 shadow-md text-sm`}>
                            {experience.impact.icon && <experience.impact.icon className="w-4 h-4 flex-shrink-0" />}
                            <span className="font-semibold">{experience.impact.text}</span>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r ${experience.color} text-white shadow-md`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${experience.color} opacity-5 rounded-full blur-3xl`} />
                  </motion.div>
                )
              } else if (index === 1) {
                // Card 2: Centered with icon on top
                return (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`${experience.bgColor} ${experience.borderColor} border-2 rounded-xl md:rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all relative overflow-hidden text-center`}
                  >
                    {/* Icon at Top Center */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-xl`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                      {experience.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
                      {experience.description}
                    </p>
                    {experience.impact && (
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${experience.color} text-white mb-6 shadow-md text-sm`}>
                        {experience.impact.icon && <experience.impact.icon className="w-4 h-4 flex-shrink-0" />}
                        <span className="font-semibold">{experience.impact.text}</span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 justify-center mt-6">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r ${experience.color} text-white shadow-md`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={`absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br ${experience.color} opacity-5 rounded-full blur-3xl`} />
                  </motion.div>
                )
              } else {
                // Card 3: Right-aligned with icon on right
                return (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`${experience.bgColor} ${experience.borderColor} border-2 rounded-xl md:rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-all relative overflow-hidden`}
                  >
                    <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8">
                      {/* Large Icon on Right */}
                      <div className="flex-shrink-0 flex justify-end md:justify-start">
                        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-xl`}>
                          <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 text-right md:text-left">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3">
                          {experience.title}
                        </h3>
                        <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
                          {experience.description}
                        </p>
                        {experience.impact && (
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${experience.color} text-white mb-4 shadow-md text-sm`}>
                            {experience.impact.icon && <experience.impact.icon className="w-4 h-4 flex-shrink-0" />}
                            <span className="font-semibold">{experience.impact.text}</span>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2 justify-end md:justify-start mt-4">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r ${experience.color} text-white shadow-md`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={`absolute top-0 left-0 w-40 h-40 bg-gradient-to-br ${experience.color} opacity-5 rounded-full blur-3xl`} />
                  </motion.div>
                )
              }
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-gray-200">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
              Ready to Create Your Own Experience?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's collaborate and build something amazing together. Our team is ready to turn your vision into reality.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-heading font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

