'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart,
  ShoppingBag,
  CreditCard,
  Building2,
  GraduationCap,
  Factory,
  UtensilsCrossed,
  CheckCircle2,
  Sparkles,
  ChevronDown
} from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import { useState } from 'react'

const industryVerticals = [
  {
    id: 1,
    name: 'Healthcare',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    description: 'AI-powered solutions for hospitals, clinics, and healthcare providers',
    services: [
      'Electronic Health Records (EHR) Integration',
      'Medical Image Analysis',
      'Patient Data Analytics',
      'Telemedicine Platforms',
      'Drug Discovery & Research',
      'Healthcare Chatbots'
    ]
  },
  {
    id: 2,
    name: 'Retail & E-commerce',
    icon: ShoppingBag,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    description: 'Transform retail operations with intelligent automation and analytics',
    services: [
      'Inventory Management Systems',
      'Personalized Recommendations',
      'Demand Forecasting',
      'Customer Behavior Analytics',
      'Supply Chain Optimization',
      'Virtual Shopping Assistants'
    ]
  },
  {
    id: 3,
    name: 'Fintech',
    icon: CreditCard,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    description: 'Secure and innovative financial technology solutions',
    services: [
      'Payment Processing Solutions',
      'Digital Banking Platforms',
      'Credit Risk Analysis',
      'Regulatory Compliance Tools',
      'Personal Finance Apps',
      'Financial Data Analytics',
      'Mobile Banking Solutions',
      'Investment Management Tools'
    ]
  },
  {
    id: 4,
    name: 'Manufacturing',
    icon: Factory,
    color: 'from-gray-600 to-gray-800',
    bgColor: 'bg-gray-50',
    description: 'Smart manufacturing with IoT and AI integration',
    services: [
      'Predictive Maintenance',
      'Quality Control Automation',
      'Supply Chain Management',
      'Production Optimization',
      'Industrial IoT Solutions'
    ]
  },
  {
    id: 5,
    name: 'Education',
    icon: GraduationCap,
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    description: 'EdTech solutions for modern learning experiences',
    services: [
      'Learning Management Systems',
      'Adaptive Learning Platforms',
      'Student Performance Analytics',
      'Virtual Classrooms',
      'Automated Grading Systems'
    ]
  },
  {
    id: 6,
    name: 'Food & Beverage',
    icon: UtensilsCrossed,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    description: 'Streamline operations in the food service industry',
    services: [
      'Restaurant Management Systems',
      'Inventory Tracking',
      'Menu Optimization',
      'Delivery Route Optimization'
    ]
  },
  {
    id: 7,
    name: 'Real Estate',
    icon: Building2,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    description: 'Property management and real estate technology',
    services: [
      'Property Management Platforms',
      'Virtual Property Tours',
      'Market Analysis Tools',
      'Tenant Management Systems'
    ]
  }
]

export default function IndustryVertical() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [expandedIndustry, setExpandedIndustry] = useState<number | null>(null)

  return (
    <section ref={ref} className="pt-0 pb-20 md:pb-24 relative overflow-hidden bg-white">
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
          <div className="text-center mb-12 md:mb-16 lg:mb-24 px-4">
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 mb-6 md:mb-8 border border-white/50 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Building2 className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              <span className="text-xs md:text-sm font-heading font-semibold text-gray-700">Industry Expertise</span>
            </motion.div>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serve</span>
            </motion.h2>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tailored solutions across diverse industries to meet your unique business needs
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Industry Dropdown Cards */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="space-y-4 max-w-5xl mx-auto">
            {industryVerticals.map((industry, index) => {
              const IndustryIcon = industry.icon
              const isExpanded = expandedIndustry === industry.id
              
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      isExpanded 
                        ? `border-transparent shadow-2xl ${industry.bgColor}` 
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
                    }`}
                    onClick={() => setExpandedIndustry(isExpanded ? null : industry.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} ${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
                    
                    {/* Header */}
                    <div className="p-4 sm:p-5 md:p-6 flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 flex-1 min-w-0">
                        <motion.div
                          className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-md flex-shrink-0`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IndustryIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-gray-900 mb-1 truncate">
                            {industry.name}
                          </h4>
                          <p className="text-gray-600 font-body text-xs sm:text-sm line-clamp-2">
                            {industry.description}
                          </p>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 ml-2 sm:ml-4"
                      >
                        <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 ${isExpanded ? 'text-green-600' : 'text-gray-400'}`} />
                      </motion.div>
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-0">
                        <div className={`border-t-2 border-gray-200 pt-4 sm:pt-6 md:pt-8`}>
                          <h5 className="text-sm sm:text-base md:text-lg font-heading font-semibold text-gray-900 mb-3 md:mb-4 flex items-center space-x-2">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`} />
                            <span>Our Services</span>
                          </h5>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {industry.services.map((service, serviceIndex) => (
                              <motion.div
                                key={serviceIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: serviceIndex * 0.05 }}
                                className="flex items-start space-x-2 sm:space-x-3 group/item"
                              >
                                <motion.div
                                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${industry.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                                  whileHover={{ scale: 1.2, rotate: 180 }}
                                >
                                  <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                                </motion.div>
                                <span className="text-gray-700 font-body text-xs sm:text-sm group-hover/item:text-gray-900 transition-colors">
                                  {service}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

