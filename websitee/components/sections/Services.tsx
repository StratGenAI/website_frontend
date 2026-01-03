'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Bot,
  Zap,
  Code,
  Database,
  BarChart3,
  Brain,
  Cloud,
  Shield,
  Smartphone,
  Globe,
  Workflow,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Star
} from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const serviceCategories = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    services: [
      {
        title: 'Custom AI Solutions',
        description: 'Tailored AI systems designed to solve your specific business challenges',
        features: ['Machine Learning Models', 'Deep Learning Networks', 'Neural Networks', 'Predictive Analytics']
      },
      {
        title: 'Natural Language Processing',
        description: 'Advanced NLP solutions for text analysis, sentiment detection, and language understanding',
        features: ['Text Classification', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development']
      },
      {
        title: 'Computer Vision',
        description: 'Image and video analysis solutions powered by advanced computer vision algorithms',
        features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analytics']
      },
      {
        title: 'Predictive Analytics',
        description: 'Data-driven forecasting and predictive modeling for informed decision-making',
        features: ['Forecasting Models', 'Risk Analysis', 'Trend Prediction', 'Performance Optimization']
      }
    ]
  },
  {
    category: 'Automation & Integration',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    services: [
      {
        title: 'Process Automation',
        description: 'Streamline your workflows with intelligent automation solutions',
        features: ['Workflow Automation', 'Task Scheduling', 'Data Processing', 'Report Generation']
      },
      {
        title: 'Business Process Automation',
        description: 'Automate repetitive business processes to increase efficiency and reduce costs',
        features: ['Document Processing', 'Email Automation', 'Invoice Management', 'Customer Onboarding']
      },
    ]
  },
  {
    category: 'Development Services',
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    services: [
      {
        title: 'Full Stack Development',
        description: 'End-to-end web and application development with modern technologies',
        features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Development']
      },
      {
        title: 'AI-Powered Applications',
        description: 'Custom applications infused with AI capabilities for enhanced functionality',
        features: ['Smart Applications', 'Intelligent Dashboards', 'AI-Enhanced UX', 'Real-time Processing']
      },
    ]
  },
  {
    category: 'Data & Analytics',
    icon: BarChart3,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    services: [
      {
        title: 'Business Intelligence',
        description: 'Transform raw data into actionable insights with advanced BI solutions',
        features: ['Data Visualization', 'Interactive Dashboards', 'KPI Tracking', 'Custom Reports']
      },
      {
        title: 'Data Science Consulting',
        description: 'Expert guidance on data strategy, modeling, and implementation',
        features: ['Data Strategy', 'Model Development', 'Statistical Analysis', 'A/B Testing']
      }
    ]
  },
  {
    category: 'Specialized Solutions',
    icon: Sparkles,
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50',
    services: [
      {
        title: 'AI Chatbots & Virtual Assistants',
        description: 'Intelligent conversational AI for customer support and engagement',
        features: ['Natural Conversations', 'Multi-language Support', 'Context Awareness', 'Integration Ready']
      },
      {
        title: 'Recommendation Systems',
        description: 'Personalized recommendation engines for e-commerce and content platforms',
        features: ['Product Recommendations', 'Content Filtering', 'Collaborative Filtering', 'Real-time Suggestions']
      },
    ]
  }
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" ref={ref} className="py-32 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-5 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <ScrollReveal direction="scale" delay={0.2}>
          <div className="text-center mb-24">
            <motion.div
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 mb-8 border border-white/50 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-heading font-semibold text-gray-700">What We Offer</span>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="gradient-text">Services</span>
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive AI, ML, and development solutions to transform your business
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Enhanced Services by Category */}
        <div className="space-y-32">
          {serviceCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            
            return (
              <ScrollReveal key={category.category} direction="up" delay={0.2 + categoryIndex * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
                  className="relative"
                >
                  {/* Category Header - Enhanced */}
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-16">
                    <motion.div
                      className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-2xl flex-shrink-0`}
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <CategoryIcon className="w-12 h-12 text-white" />
                      <motion.div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-50 blur-xl`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-3">
                        {category.category}
                      </h3>
                      <div className={`h-1.5 w-40 bg-gradient-to-r ${category.color} rounded-full shadow-lg`} />
                    </div>
                  </div>

                  {/* Services Grid - Enhanced */}
                  <div className={`grid grid-cols-1 ${category.services.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-8`}>
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.title}
                        className="group relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 + serviceIndex * 0.15 }}
                        whileHover={{ scale: 1.03, y: -8 }}
                      >
                        {/* Enhanced Card */}
                        <div className={`relative p-10 rounded-3xl ${category.bgColor} border-2 border-transparent group-hover:border-blue-300 shadow-xl group-hover:shadow-2xl transition-all overflow-hidden`}>
                          {/* Gradient Accent Bar */}
                          <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${category.color} rounded-t-3xl`} />
                          
                          {/* Animated Background Gradient */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-3xl`}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Decorative Elements */}
                          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl" />
                          
                          <div className="relative z-10">
                            {/* Service Icon */}
                            <motion.div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg`}
                              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <CategoryIcon className="w-8 h-8 text-white" />
                            </motion.div>
                            
                            {/* Title */}
                            <h4 className="text-2xl md:text-3xl font-display font-black text-gray-900 mb-4">
                              {service.title}
                            </h4>
                            
                            {/* Description */}
                            <p className="text-gray-600 font-body mb-8 leading-relaxed text-base">
                              {service.description}
                            </p>

                            {/* Features List - Enhanced */}
                            <div className="space-y-4 mb-8">
                              {service.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={feature}
                                  className="flex items-center space-x-3 group/feature"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={inView ? { opacity: 1, x: 0 } : {}}
                                  transition={{ delay: 0.4 + categoryIndex * 0.1 + serviceIndex * 0.15 + featureIndex * 0.08 }}
                                >
                                  <motion.div
                                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 shadow-md`}
                                    whileHover={{ scale: 1.2, rotate: 180 }}
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                  </motion.div>
                                  <span className="text-sm font-body text-gray-700 group-hover/feature:text-gray-900 transition-colors">{feature}</span>
                                </motion.div>
                              ))}
                            </div>

                            {/* Enhanced Learn More Button */}
                            <motion.button
                              className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r ${category.color} text-white font-heading font-semibold shadow-lg hover:shadow-xl transition-all group/btn`}
                              whileHover={{ scale: 1.05, x: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>Learn More</span>
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <ArrowRight className="w-5 h-5" />
                              </motion.div>
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Enhanced CTA Section */}
        <ScrollReveal direction="up" delay={0.8}>
          <motion.div
            className="mt-40 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.div
              className="relative inline-block p-12 md:p-16 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-50"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center space-x-2 mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Star className="w-8 h-8 text-yellow-300" />
                  <Star className="w-6 h-6 text-yellow-300" />
                  <Star className="w-8 h-8 text-yellow-300" />
                </motion.div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6">
                  Ready to Get Started?
                </h3>
                <p className="text-xl md:text-2xl font-body mb-10 opacity-90 max-w-2xl mx-auto">
                  Let's discuss how our services can transform your business
                </p>
                <motion.a
                  href="/#contact"
                  className="inline-flex items-center space-x-3 px-12 py-6 bg-white text-gray-900 rounded-xl font-heading font-bold shadow-xl hover:shadow-2xl transition-all text-lg"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
