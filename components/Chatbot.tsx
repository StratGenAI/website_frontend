'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react'
import Image from 'next/image'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! 👋 I'm Keirō, your AI assistant from StratgenAI. I'm here to help you learn about our company, products, and services. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Company Knowledge Base
  const knowledgeBase: { [key: string]: string[] } = {
    company: [
      "StratgenAI is a cutting-edge AI software company founded by three passionate co-founders.",
      "We specialize in developing intelligent software solutions that help businesses leverage AI to solve real-world problems.",
      "Our mission is to democratize AI technology and make it accessible for businesses of all sizes.",
      "We combine technical expertise with business acumen to deliver transformative solutions.",
      "Tagline: 'From Silent Gen to Gen Alpha - AI that speaks your language'",
    ],
    products: [
      "We have 2 main products:",
      "1. **Keirō** - Intelligent conversational AI chatbot. Features: Natural Language Processing, Multi-language Support, Customizable Workflows, Analytics & Insights, Easy Integration.",
      "2. **Stratflow** - AI-driven fashion marketing platform. Features: Trend Analysis & Prediction, Personalized Recommendations, Campaign Optimization, Customer Segmentation, Real-time Analytics.",
    ],
    services: [
      "We provide comprehensive AI solutions including:",
      "• Custom AI Development",
      "• AI Consulting & Strategy",
      "• Machine Learning Solutions",
      "• Natural Language Processing",
      "• Computer Vision Solutions",
      "• AI Integration Services",
      "• Data Analytics & Insights",
    ],
    industries: [
      "We serve multiple industries:",
      "• Healthcare - EHR Integration, Medical Image Analysis, Telemedicine Platforms",
      "• Retail & E-commerce - Inventory Management, Personalized Recommendations, Supply Chain Optimization",
      "• Fintech - Payment Processing, Digital Banking, Credit Risk Analysis",
      "• Manufacturing - Predictive Maintenance, Quality Control, Production Optimization",
      "• Education - Learning Management Systems, Adaptive Learning, Virtual Classrooms",
      "• Food & Beverage - Restaurant Management, Inventory Tracking, Menu Optimization",
      "• Real Estate - Property Management, Virtual Tours, Market Analysis",
    ],
    contact: [
      "You can reach us at:",
      "📧 Email: hello@stratgenai.in",
      "📍 Location: Ahmedabad, India",
      "Feel free to ask me anything else about our services!",
    ],
    founders: [
      "StratgenAI was founded by three passionate co-founders who are building the future of AI-powered business solutions.",
      "",
      "👤 **Krisha Patel** - Dimension of Intelligence",
      "A visionary leader with deep expertise in AI and machine learning. Krisha drives our technical innovation, transforming complex algorithms into intelligent solutions that solve real-world business challenges.",
      "",
      "👤 **Niyanta Meswaniya** - Creative Lens and Content",
      "The creative force behind our brand and communications. Niyanta brings artistic vision and strategic content expertise, ensuring our solutions are not just powerful but also beautifully presented.",
      "",
      "👤 **Sheefa Memon** - Growth Lens",
      "Focused on growth, strategy, and scaling our impact. Sheefa combines business acumen with a growth mindset, driving our expansion and ensuring we deliver value at every stage.",
      "",
      "Together, they bring a unique blend of technical expertise, creative vision, and business acumen to make AI accessible and transformative for businesses of all sizes.",
    ],
    about: [
      "StratgenAI is an AI software company that helps businesses transform their operations through intelligent automation.",
      "We build cutting-edge AI solutions that automate processes, enhance productivity, and drive innovation.",
      "Our team combines technical expertise with business acumen to deliver solutions that truly transform how clients operate.",
    ],
  }

  const getBotResponse = (userMessage: string): string => {
    // Normalize message - remove special chars, convert to lowercase, handle common typos
    let normalizedMessage = userMessage.toLowerCase()
      .replace(/[^\w\s]/g, ' ') // Remove special chars
      .replace(/\s+/g, ' ') // Multiple spaces to single
      .trim()
    
    // Common spelling corrections
    normalizedMessage = normalizedMessage
      .replace(/\bfounder\b/g, 'founder') // Standardize
      .replace(/\bfounders\b/g, 'founder') // Plural to singular for matching
      .replace(/\bfounder\b/g, 'founder')
      .replace(/\bkon\b/g, 'who')
      .replace(/\bkaun\b/g, 'who')
      .replace(/\bkya\b/g, 'what')
      .replace(/\bke\b/g, 'of')
      .replace(/\bbare\b/g, 'about')
      .replace(/\bme\b/g, 'in')
    
    // Extract all words for flexible matching
    const words = normalizedMessage.split(/\s+/).filter(w => w.length > 0)
    
    // Ultra-flexible pattern matching - checks if ANY keyword exists
    const hasAnyWord = (keywords: string[]): boolean => {
      const keywordList = keywords.map(k => k.toLowerCase().replace(/\s+/g, ' '))
      
      // Check each keyword
      for (const keyword of keywordList) {
        const keywordWords = keyword.split(/\s+/)
        
        // Check if all words of keyword exist in message (in any order)
        const allWordsFound = keywordWords.every(kw => {
          // Direct match
          if (words.some(w => w === kw)) return true
          // Partial match (handles typos)
          if (words.some(w => w.includes(kw) || kw.includes(w))) return true
          // Similarity check for typos
          return words.some(w => {
            if (Math.abs(w.length - kw.length) > 3) return false
            let matches = 0
            const minLen = Math.min(w.length, kw.length)
            for (let i = 0; i < minLen; i++) {
              if (w[i] === kw[i]) matches++
            }
            return matches >= Math.max(2, minLen * 0.5) // At least 50% match or 2 chars
          })
        })
        
        if (allWordsFound) return true
        
        // Also check if message contains keyword as substring
        if (normalizedMessage.includes(keyword)) return true
      }
      
      return false
    }
    
    // Check for individual important words (very flexible)
    const hasImportantWord = (importantWords: string[]): boolean => {
      return importantWords.some(word => {
        const w = word.toLowerCase()
        // Direct match
        if (words.some(msgWord => msgWord === w || msgWord.includes(w) || w.includes(msgWord))) return true
        // Similarity for typos
        return words.some(msgWord => {
          if (Math.abs(msgWord.length - w.length) > 3) return false
          let matches = 0
          const minLen = Math.min(msgWord.length, w.length)
          for (let i = 0; i < minLen; i++) {
            if (msgWord[i] === w[i]) matches++
          }
          return matches >= Math.max(2, minLen * 0.5)
        })
      })
    }

    // Products - Check FIRST (most specific)
    if (hasImportantWord(['product', 'products', 'keiro', 'keirō', 'stratflow']) ||
        hasAnyWord(['what product', 'which product', 'what products', 'which products', 'product list', 'products list', 'what offer', 'what do you offer', 'what you offer', 'product kya', 'products kya', 'keiro kya', 'stratflow kya']) ||
        normalizedMessage.match(/\b(product|products|keiro|stratflow|solution|solutions|offering|offerings)\b/i)) {
      return knowledgeBase.products.join('\n\n')
    }

    // Contact - Check SECOND
    if (hasImportantWord(['contact', 'email', 'reach', 'touch', 'phone', 'address', 'location', 'mail']) ||
        hasAnyWord(['how contact', 'contact how', 'contact info', 'email info', 'phone number', 'get touch', 'reach out', 'contact details', 'how to contact', 'how to reach']) ||
        normalizedMessage.match(/\b(contact|email|phone|address|location|reach|touch|mail)\b/i)) {
      return knowledgeBase.contact.join('\n\n')
    }

    // Founders - Check THIRD (more specific patterns)
    if ((hasImportantWord(['founder', 'founders', 'foundr', 'funder', 'cofounder', 'co-founder']) && 
         !normalizedMessage.match(/\b(product|products|service|services|contact|email|price|pricing)\b/i)) ||
        hasAnyWord(['who founder', 'who founders', 'founder who', 'founders who', 'founder name', 'founder names', 'founder info', 'founder details', 'founder about', 'founder ke', 'founder kaun', 'founder kon', 'founder kya', 'founder list', 'founder team', 'who started', 'who created', 'who made', 'who built']) ||
        (normalizedMessage.match(/\b(founder|founders|foundr|funder|cofounder|co-founder)\b/i) && 
         !normalizedMessage.match(/\b(product|products|service|services|contact|email)\b/i))) {
      return knowledgeBase.founders.join('\n\n')
    }

    // Services - Check after products
    if ((hasImportantWord(['service', 'services', 'capability', 'capabilities']) && 
         !normalizedMessage.match(/\b(product|products|founder|founders)\b/i)) ||
        hasAnyWord(['what service', 'which service', 'what services', 'which services', 'service list', 'services list', 'what can you', 'what you do', 'what do you', 'services kya', 'service kya']) ||
        (normalizedMessage.match(/\b(service|services|capability|capabilities)\b/i) && 
         !normalizedMessage.match(/\b(product|products|founder|founders)\b/i))) {
      return knowledgeBase.services.join('\n\n')
    }

    // Industries - ULTRA FLEXIBLE
    if (hasImportantWord(['industry', 'industries', 'vertical', 'verticals', 'client', 'clients', 'customer', 'customers', 'healthcare', 'retail', 'fintech', 'manufacturing', 'education']) ||
        hasAnyWord(['which industry', 'what industry', 'which industries', 'what industries', 'who serve', 'who you serve', 'clients who', 'customers who']) ||
        normalizedMessage.match(/industry|vertical|client|customer|healthcare|retail|fintech/i)) {
      return knowledgeBase.industries.join('\n\n')
    }

    // Company info - ULTRA FLEXIBLE
    if (hasImportantWord(['company', 'about', 'stratgenai', 'stratgen', 'who are', 'what is']) ||
        hasAnyWord(['about company', 'company about', 'company info', 'company information', 'what company', 'who company', 'tell about', 'tell me about']) ||
        normalizedMessage.match(/company|about|stratgenai|who are|what is/i)) {
      return knowledgeBase.about.join('\n\n')
    }

    // Pricing - ULTRA FLEXIBLE
    if (hasImportantWord(['price', 'pricing', 'cost', 'fee', 'charge', 'charges', 'rate', 'paisa', 'money']) ||
        hasAnyWord(['how much', 'what price', 'what cost', 'pricing info', 'price info', 'cost info', 'kitna', 'kitna paisa', 'kitna cost']) ||
        normalizedMessage.match(/price|pricing|cost|fee|charge|how much|kitna/i)) {
      return "Great question! 💰 Our pricing depends on your specific needs and requirements. I'd recommend reaching out to us at hello@stratgenai.in for a personalized quote. We'd love to discuss how we can help your business!"
    }

    // Help - ULTRA FLEXIBLE
    if (hasImportantWord(['help', 'madad', 'sahayata', 'assist', 'what can', 'what do']) ||
        hasAnyWord(['help me', 'can help', 'what help', 'how help', 'help karo', 'kaise help']) ||
        normalizedMessage.match(/help|madad|sahayata|assist|what can|what do/i)) {
      return "I can help you with information about:\n\n• Company Overview\n• Products (Keirō & Stratflow)\n• Services\n• Industries We Serve\n• Contact Information\n• Founders\n• Pricing\n\nJust ask me anything! 😊"
    }

    // Greetings (multiple languages) - Check this LAST
    if (hasImportantWord(['hi', 'hello', 'hey', 'namaste', 'namaskar', 'hola', 'bonjour', 'good morning', 'good afternoon', 'good evening', 'sup', 'whats up', 'kaise ho', 'kya haal']) ||
        normalizedMessage.match(/^(hi|hello|hey|namaste|namaskar|hola|bonjour|good morning|good afternoon|good evening|sup|whats up|kaise ho|kya haal)/i)) {
      return "Hello! 👋 Great to meet you! I'm Keirō, your friendly AI assistant. How can I help you learn about StratgenAI today?"
    }

    // Default friendly response with suggestions
    return "That's an interesting question! 🤔 I can help you with information about:\n\n• Our company and mission\n• Products (Keirō & Stratflow)\n• Services we offer\n• Industries we serve\n• Contact information\n• Founders\n• Pricing\n\nTry asking something like:\n• 'Tell me about founders'\n• 'What products do you have?'\n• 'What industries do you serve?'\n• 'How can I contact you?'\n\nOr ask in Hindi/any language - I understand! 😊"
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    'Tell me about StratgenAI',
    'What products do you offer?',
    'What industries do you serve?',
    'How can I contact you?',
  ]

  return (
    <>
      {/* Chatbot Button - Bottom Right */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center group hover:shadow-blue-500/50 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-sm"></div>
              <Image
                src="/chatbot_logo.png"
                alt="Keirō Chatbot"
                width={40}
                height={40}
                className="w-10 h-10 object-contain relative z-10 drop-shadow-lg"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }}
              />
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white z-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-96 h-[600px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header - Enhanced Design */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-5 flex items-center justify-between relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="flex items-center space-x-3 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-md"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-2 border-2 border-white/30">
                    <Image
                      src="/chatbot_logo.png"
                      alt="Keirō"
                      width={36}
                      height={36}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <motion.div
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-base drop-shadow-lg">Keirō</h3>
                  <p className="text-white/90 text-xs font-medium">AI Assistant</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-xl p-2 transition-all relative z-10 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages - Enhanced Design */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0 mr-2 mt-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-100'
                    }`}
                  >
                    {message.sender === 'bot' && (
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Keirō</span>
                      </div>
                    )}
                    <p className={`text-sm whitespace-pre-wrap font-body leading-relaxed ${
                      message.sender === 'user' ? 'text-white' : 'text-gray-700'
                    }`}>
                      {message.text}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="flex-shrink-0 ml-2 mt-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs font-bold">U</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex-shrink-0 mr-2 mt-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Keirō</span>
                      <div className="flex space-x-1.5">
                        <motion.div
                          className="w-2 h-2 bg-blue-500 rounded-full"
                          animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-pink-500 rounded-full"
                          animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions - Enhanced */}
            {messages.length === 1 && (
              <div className="px-5 py-3 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-t border-gray-100">
                <p className="text-xs text-gray-700 mb-3 font-bold flex items-center space-x-2">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  <span>Quick questions:</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => {
                        setInput(q)
                        setTimeout(() => handleSend(), 100)
                      }}
                      className="text-xs px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm font-medium"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {q}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input - Enhanced */}
            <div className="p-4 bg-white border-t border-gray-100 shadow-lg">
              <div className="flex items-center space-x-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-gray-50 transition-all"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

