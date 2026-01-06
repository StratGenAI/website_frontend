'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, Sparkles, User } from 'lucide-react'
import Image from 'next/image'
import Fuse from 'fuse.js'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface KnowledgeItem {
  id: number
  category: string
  questions: string[]
  keywords: string[]
  answer: string
  followUp?: string[]
  requiresLeadCapture?: boolean
}

interface ConversationContext {
  userName: string | null
  userEmail: string | null
  userPhone: string | null
  interest: string | null
  lastCategory: string | null
  askedQuestions: string[]
  unclearAttempts: number
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello, I'm Keirō, your AI assistant at StratgenAI.\n\nI'm here to help you understand our AI solutions, services, and how we can transform your business operations.\n\nHow can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' })
  const [context, setContext] = useState<ConversationContext>({
    userName: null,
    userEmail: null,
    userPhone: null,
    interest: null,
    lastCategory: null,
    askedQuestions: [],
    unclearAttempts: 0,
  })
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

  // Enhanced Knowledge Base with questions, keywords, and answers
  const knowledgeBase: KnowledgeItem[] = [
    {
      id: 1,
      category: 'company_info',
      questions: [
        'what is your company',
        'company ke bare mein batao',
        'about your company',
        'tell me about yourself',
        'tell me about stratgenai',
        'stratgenai ke bare mein batao',
        'aap kya karte ho',
        'aapki company kya karti hai',
        'stratgenai kya hai',
        'company about',
        'company info',
        'about stratgenai',
      ],
      keywords: ['company', 'business', 'about', 'kya karte', 'services', 'stratgenai', 'aap', 'tum'],
      answer: "We are **StratgenAI**, a cutting-edge AI software company specializing in intelligent business solutions.\n\nWe help businesses:\n• Automate processes with AI\n• Enhance productivity\n• Drive innovation\n\nOur tagline: *'From Silent Gen to Gen Alpha - AI that speaks your language'*\n\nWould you like to know about our products or services?",
      followUp: ['Tell me about products', 'What services do you offer?', 'Who are the founders?'],
    },
    {
      id: 2,
      category: 'products',
      questions: [
        'what products do you have',
        'aapke products kya hai',
        'products batao',
        'what do you sell',
        'kya kya milta hai',
        'product list',
        'keiro kya hai',
        'stratflow kya hai',
        'products kya hai',
        'what are your products',
        'products list',
        'kya products hai',
        'aap kya bechte ho',
        'offerings kya hai',
        'solutions kya hai',
      ],
      keywords: ['product', 'sell', 'offer', 'kya milta', 'list', 'keiro', 'stratflow', 'solution', 'offerings', 'bechte'],
      answer: "We offer **2 main products**:\n\n1. **Keirō** 🤖\n   Intelligent conversational AI chatbot\n   • Natural Language Processing\n   • Multi-language Support\n   • Customizable Workflows\n   • Analytics & Insights\n   • Easy Integration\n\n2. **Stratflow** 👗\n   AI-driven fashion marketing platform\n   • Trend Analysis & Prediction\n   • Personalized Recommendations\n   • Campaign Optimization\n   • Customer Segmentation\n   • Real-time Analytics\n\nWhich one interests you more?",
      followUp: ['Tell me about Keirō', 'Tell me about Stratflow', 'How can I contact you?'],
    },
    {
      id: 4,
      category: 'contact',
      questions: [
        'how to contact you',
        'contact details',
        'phone number',
        'email address',
        'tumse kaise baat kare',
        'contact kaise kare',
        'reach out kaise',
        'email kya hai',
        'phone kya hai',
        'contact number',
        'phone number kya hai',
        'email id',
        'address kya hai',
        'location kya hai',
        'kaise contact kare',
        'get in touch',
        'connect karna hai',
      ],
      keywords: ['contact', 'phone', 'email', 'call', 'reach', 'baat', 'connect', 'touch', 'number', 'address', 'location'],
      answer: "You can reach us at:\n\n📧 **Email**: hello@stratgenai.in\n📍 **Location**: Ahmedabad, India\n\nWould you like to:\n• Schedule a call\n• Send us an email\n• Get WhatsApp contact",
      followUp: ['Schedule a call', 'Send email', 'WhatsApp us'],
    },
    {
      id: 5,
      category: 'demo',
      questions: [
        'can i see a demo',
        'demo dikhao',
        'product demo',
        'free trial',
        'test kar sakte hai',
        'try karna hai',
        'demo chahiye',
        'trial',
      ],
      keywords: ['demo', 'trial', 'test', 'try', 'dikhao', 'dekh', 'preview', 'sample'],
      answer: "Absolutely! 🎉\n\nWe offer a **free 14-day trial** with full features!\n\nWould you like to:\n1. Watch a 5-minute demo video\n2. Schedule a live demo call\n3. Start free trial now\n\nWhich option works for you?",
      followUp: ['Watch demo video', 'Schedule live demo', 'Start free trial'],
      requiresLeadCapture: true,
    },
    {
      id: 6,
      category: 'services',
      questions: [
        'what services do you offer',
        'services kya hai',
        'kya services milti hai',
        'what can you do',
        'capabilities kya hai',
        'what services',
        'services list',
        'kya services hai',
        'aap kya services dete ho',
        'what do you provide',
        'kya provide karte ho',
      ],
      keywords: ['service', 'capability', 'function', 'kya kar', 'options', 'offer', 'provide', 'dete'],
      answer: "We provide comprehensive **AI solutions**:\n\n✅ Custom AI Development\n✅ AI Consulting & Strategy\n✅ Machine Learning Solutions\n✅ Natural Language Processing\n✅ Computer Vision Solutions\n✅ AI Integration Services\n✅ Data Analytics & Insights\n\nWhich service interests you?",
      followUp: ['Tell me about AI Consulting', 'Custom Development', 'Integration Services'],
    },
    {
      id: 7,
      category: 'founders',
      questions: [
        'who are the founders',
        'founders kaun hai',
        'founder kya hai',
        'founder ke bare mein',
        'who started',
        'founder info',
        'founders ke bare mein',
        'founder kaun hai',
        'who created',
        'who made',
        'who built',
        'founder team',
        'founders list',
      ],
      keywords: ['founder', 'started', 'created', 'built', 'kaun', 'who', 'made', 'team'],
      answer: "StratgenAI was founded by **three passionate co-founders**:\n\n👤 **Krisha Patel** - Dimension of Intelligence\nVisionary leader with deep AI/ML expertise\n\n👤 **Niyanta Meswaniya** - Creative Lens\nCreative force behind brand and communications\n\n👤 **Sheefa Memon** - Growth Lens\nFocused on growth, strategy, and scaling\n\nTogether, they bring technical expertise, creative vision, and business acumen!",
      followUp: ['Tell me about company', 'What products do you have?'],
    },
    {
      id: 8,
      category: 'industries',
      questions: [
        'which industries do you serve',
        'kaun se industry ke liye',
        'sectors kya hai',
        'kis field mein kaam karte ho',
        'industries',
        'what industries',
        'industries list',
        'kaun se industries',
        'clients kya hai',
        'customers kya hai',
        'kis industry ke liye',
      ],
      keywords: ['industry', 'sector', 'domain', 'field', 'vertical', 'client', 'customer', 'industries'],
      answer: "We serve multiple industries:\n\n🏪 E-commerce & Retail\n🏥 Healthcare\n🏦 Banking & Finance\n📚 Education\n🏭 Manufacturing\n🍔 Food & Hospitality\n🏠 Real Estate\n\nWhich industry are you from?",
      followUp: ['E-commerce solutions', 'Healthcare use cases', 'Tell me more'],
    },
    {
      id: 9,
      category: 'implementation',
      questions: [
        'how long does implementation take',
        'setup time kitna lagta hai',
        'implementation kaise hoti hai',
        'launch mein kitna time',
      ],
      keywords: ['implementation', 'setup', 'time', 'launch', 'deploy', 'install'],
      answer: "Implementation timeline:\n\n⚡ **Quick Setup**: 2-3 days (basic chatbot)\n📅 **Standard**: 1-2 weeks (customized solution)\n🏢 **Enterprise**: 3-4 weeks (full integration)\n\nWe handle everything - you just provide the information!",
      followUp: ['What do I need to provide?', 'Get started now'],
    },
    {
      id: 10,
      category: 'support',
      questions: [
        'customer support kaise hai',
        'help milegi kya',
        'support available hai',
        'technical support',
      ],
      keywords: ['support', 'help', 'assist', 'problem', 'issue', 'madad'],
      answer: "We provide comprehensive support:\n\n🎯 24/7 Technical Support\n📚 Detailed Documentation\n💬 Dedicated Account Manager\n🎓 Training Sessions\n⚡ <2 hour response time\n\nOur team is always here to help!",
      followUp: ['Talk to support now', 'View documentation'],
    },
    {
      id: 11,
      category: 'community',
      questions: [
        'community kya hai',
        'stratgenai community',
        'community ke bare mein',
        'join community',
        'community join kaise kare',
        'community details',
        'community info',
        'community kya hai',
        'community join karna hai',
        'community mein kaise aaye',
        'community group',
        'community network',
      ],
      keywords: ['community', 'join', 'group', 'network', 'connect', 'members', 'community'],
      answer: "Welcome to **StratgenAI Community**! 🌟\n\n[COMMUNITY_IMAGE]\n\nWe have an active community of AI enthusiasts, developers, and business leaders who:\n\n✨ Share knowledge and insights\n✨ Collaborate on projects\n✨ Get early access to new features\n✨ Network with like-minded professionals\n✨ Learn from experts\n\nWould you like to join our community? Connect with us and become part of the StratgenAI family!",
      followUp: ['How to join community?', 'Contact us', 'More about community'],
    },
  ]

  // Levenshtein distance for typo tolerance
  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix: number[][] = []
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i]
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j
    }
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2[i - 1] === str1[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          )
        }
      }
    }
    return matrix[str2.length][str1.length]
  }

  // Calculate similarity percentage
  const calculateSimilarity = (str1: string, str2: string): number => {
    const maxLen = Math.max(str1.length, str2.length)
    if (maxLen === 0) return 100
    const distance = levenshteinDistance(str1, str2)
    return ((maxLen - distance) / maxLen) * 100
  }

  // Common spelling mistakes
  const commonMistakes: { [key: string]: string } = {
    prise: 'price',
    contct: 'contact',
    prodct: 'product',
    servce: 'service',
    cmopany: 'company',
    wat: 'what',
    ur: 'your',
    plz: 'please',
    thnks: 'thanks',
    kya: 'what',
    kaun: 'who',
    kaise: 'how',
    batao: 'tell',
    dikhao: 'show',
    chahiye: 'want',
    milta: 'available',
  }

  // Correct spelling
  const correctSpelling = (text: string): string => {
    let corrected = text.toLowerCase()
    Object.keys(commonMistakes).forEach((mistake) => {
      const regex = new RegExp(`\\b${mistake}\\b`, 'gi')
      corrected = corrected.replace(regex, commonMistakes[mistake])
    })
    return corrected
  }

  // Detect language
  const detectLanguage = (text: string): 'en' | 'hi-en' => {
    const hindiPattern = /[\u0900-\u097F]/
    return hindiPattern.test(text) ? 'hi-en' : 'en'
  }

  // Find best match using Fuse.js and keyword matching
  const findBestMatch = (userInput: string): KnowledgeItem | null => {
    const normalizedInput = userInput.toLowerCase().trim()
    const correctedInput = correctSpelling(normalizedInput)

    // Step 1: Keyword matching (fastest) - improved accuracy
    let keywordMatches: { item: KnowledgeItem; score: number }[] = []
    knowledgeBase.forEach((item) => {
      let score = 0
      // Check keywords
      const matchedKeywords = item.keywords.filter((keyword) => {
        const keywordLower = keyword.toLowerCase()
        // Exact word match gets higher score
        const words = correctedInput.split(/\s+/)
        if (words.some(w => w === keywordLower)) {
          score += 2 // Exact match
          return true
        } else if (correctedInput.includes(keywordLower)) {
          score += 1 // Partial match
          return true
        }
        return false
      })
      
      // Check questions for better matching
      const matchedQuestions = item.questions.filter((q) => {
        const qLower = q.toLowerCase()
        if (correctedInput.includes(qLower) || qLower.includes(correctedInput)) {
          score += 3 // Question match is very important
          return true
        }
        return false
      })
      
      if (matchedKeywords.length > 0 || matchedQuestions.length > 0) {
        keywordMatches.push({
          item,
          score: score,
        })
      }
    })

    if (keywordMatches.length > 0) {
      keywordMatches.sort((a, b) => b.score - a.score)
      // Only return if score is high enough (at least 2 points)
      if (keywordMatches[0].score >= 2) {
        return keywordMatches[0].item
      }
    }

    // Step 2: Fuzzy matching using Fuse.js
    const fuse = new Fuse(knowledgeBase, {
      keys: ['questions', 'keywords'],
      threshold: 0.5, // 50% match required (more lenient)
      includeScore: true,
      ignoreLocation: true,
      findAllMatches: true,
      minMatchCharLength: 2,
    })

    const fuseResults = fuse.search(correctedInput)
    if (fuseResults.length > 0 && fuseResults[0].score! < 0.5) {
      return fuseResults[0].item
    }

    // Step 3: Similarity matching for individual words (more lenient)
    const words = correctedInput.split(/\s+/).filter((w) => w.length > 1)
    for (const word of words) {
      for (const item of knowledgeBase) {
        // Check keywords
        for (const keyword of item.keywords) {
          const similarity = calculateSimilarity(word, keyword.toLowerCase())
          if (similarity >= 65) { // Lowered threshold from 70 to 65
            return item
          }
        }
        // Also check questions
        for (const question of item.questions) {
          const questionWords = question.toLowerCase().split(/\s+/)
          for (const qWord of questionWords) {
            const similarity = calculateSimilarity(word, qWord)
            if (similarity >= 65) {
              return item
            }
          }
        }
      }
    }

    return null
  }

  // Handle user message
  const handleUserMessage = (userInput: string): { answer: string; followUp?: string[]; category: string; requiresLead?: boolean } => {
    const normalizedInput = userInput.toLowerCase().trim()

    // Check for greetings EARLY
    const greetings = ['hi', 'hello', 'hey', 'namaste', 'namaskar', 'kaise ho', 'kya haal', 'hey there']
    if (greetings.some((g) => normalizedInput.includes(g))) {
      return {
        answer: "Hello! 👋 Great to meet you! I'm Keirō, your friendly AI assistant. How can I help you learn about StratgenAI today?",
        followUp: ['Tell me about products', 'What services do you offer?', 'How can I contact you?'],
        category: 'greeting',
      }
    }

    // Check for thanks/bye EARLY
    const thanks = ['thanks', 'thank you', 'bye', 'shukriya', 'dhanyawad', 'thanku', 'thankyou', 'thx']
    if (thanks.some((t) => normalizedInput.includes(t))) {
      return {
        answer: "You're welcome! 😊\n\nIf you need anything else, I'm always here to help.\n\nWould you like to:\n• Talk to our sales team\n• Get updates on WhatsApp\n• Explore our website\n\nHave a great day! 🌟",
        category: 'thanks',
      }
    }

    // Check for pricing queries FIRST - redirect to contact (no cost shown)
    const pricingKeywords = ['price', 'pricing', 'cost', 'charge', 'kitna', 'paisa', 'budget', 'fee', 'rate', 'plan', 'plans', 'kitne', 'kitna paisa', 'how much']
    if (pricingKeywords.some(keyword => normalizedInput.includes(keyword))) {
      return {
        answer: "You can reach us at:\n\n📧 **Email**: hello@stratgenai.in\n📍 **Location**: Ahmedabad, India\n\nFor pricing details, please contact us and we'll provide a customized quote based on your needs!",
        followUp: ['Schedule a call', 'Send email', 'WhatsApp us'],
        category: 'contact',
      }
    }

    // Check for "Tell me more" or "More about" with context
    if ((normalizedInput.includes('tell me more') || normalizedInput.includes('more about')) && context.lastCategory) {
      // If last category was community, give more community info
      if (context.lastCategory === 'community') {
        return {
          answer: "**More about StratgenAI Community** 🌟\n\nOur community is a vibrant space where:\n\n📚 **Learning Hub**: Access to exclusive AI resources, tutorials, and guides\n🤝 **Networking**: Connect with industry professionals and AI experts\n💡 **Innovation**: Share ideas, get feedback, and collaborate on projects\n🎯 **Early Access**: Be the first to know about new features and updates\n🏆 **Events**: Participate in webinars, workshops, and community meetups\n\nTo join, simply reach out to us at hello@stratgenai.in and we'll add you to our community!",
          followUp: ['How to join?', 'Contact us', 'Tell me about products'],
          category: 'community',
        }
      }
      // If last category was products, give more product info
      if (context.lastCategory === 'products') {
        return {
          answer: "**More about our Products** 🚀\n\n**Keirō** - Our flagship AI chatbot:\n• Deploy in minutes, not months\n• Understands 50+ languages\n• Integrates with 100+ platforms\n• Real-time analytics dashboard\n\n**Stratflow** - Fashion AI Platform:\n• Predict trends 6 months ahead\n• Personalize campaigns automatically\n• Increase ROI by 40% on average\n• Real-time customer insights\n\nWant detailed specs or a demo?",
          followUp: ['Get a demo', 'Contact sales', 'Tell me about services'],
          category: 'products',
        }
      }
    }

    const matchedItem = findBestMatch(userInput)

    if (matchedItem) {
      // Update context
      setContext((prev) => ({
        ...prev,
        lastCategory: matchedItem.category,
        askedQuestions: [...prev.askedQuestions, userInput],
        unclearAttempts: 0,
      }))

      return {
        answer: matchedItem.answer,
        followUp: matchedItem.followUp,
        category: matchedItem.category,
        requiresLead: matchedItem.requiresLeadCapture,
      }
    }

    // Fallback for unclear queries
    const currentAttempts = context.unclearAttempts + 1
    setContext((prev) => ({
      ...prev,
      unclearAttempts: currentAttempts,
    }))

    if (currentAttempts >= 2) {
      return {
        answer: "I'd like to connect you with our team for better assistance! 💬\n\nWould you like to:\n• Chat with human agent\n• Schedule a callback\n• Send email to support\n\n📧 Email: hello@stratgenai.in",
        followUp: ['Schedule a call', 'Send email'],
        category: 'fallback',
      }
    }

    return {
      answer: "I'm not sure I understood that correctly. Could you rephrase your question? 🤔\n\nYou can ask me about:\n• Our products and services\n• Demo or free trial\n• Contact information\n• Implementation process\n• Founders\n• Industries we serve\n\nOr try asking in Hindi/Hinglish - I understand! 😊",
      followUp: ['Tell me about products', 'What services do you offer?', 'How to contact?'],
      category: 'fallback',
    }
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
    const userInput = input
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const response = handleUserMessage(userInput)
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.answer,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setLastResponse(response)

      // Show lead form if required
      if (response.requiresLead && !showLeadForm) {
        setTimeout(() => {
          setShowLeadForm(true)
        }, 500)
      }

      setIsTyping(false)
    }, 800)
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would send lead data to your backend
    // For now, just show success message
    const successMessage: Message = {
      id: Date.now().toString(),
      text: `Thank you ${leadData.name}! 🙏\n\nWe've received your information. Our team will contact you soon at ${leadData.email}.\n\nIn the meantime, feel free to ask me anything else! 😊`,
      sender: 'bot',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, successMessage])
    setShowLeadForm(false)
    setLeadData({ name: '', email: '', phone: '' })
    setContext((prev) => ({
      ...prev,
      userName: leadData.name,
      userEmail: leadData.email,
      userPhone: leadData.phone,
    }))
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
    'What services do you offer?',
    'How can I contact you?',
  ]

  // Store last response for follow-up buttons
  const [lastResponse, setLastResponse] = useState<{ followUp?: string[] } | null>(null)

  return (
    <>
      {/* Chatbot Button - Bottom Right */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[99999] w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl border-2 border-white/30 flex items-center justify-center group hover:shadow-3xl hover:scale-110 transition-all relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 25,
          delay: 0.3
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99999
        }}
      >
        {isOpen ? (
          <motion.div
            initial={{ rotate: -90, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}
            className="relative z-10"
          >
            <X className="w-6 h-6 text-white" />
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 250, 
                damping: 20,
                delay: 0.5
              }}
              className="relative z-10"
            >
              <Image
                src="/chatbot_logo.png"
                alt="Keirō Chatbot"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                priority
                unoptimized
              />
            </motion.div>
            <motion.div
              className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-white shadow-lg z-20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [1, 0.8, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.8
              }}
            />
          </>
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99997]"
            />
            {/* Chatbot Window - Centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99998] w-[calc(100vw-2rem)] sm:w-[500px] max-w-[calc(100vw-2rem)] sm:max-w-[500px] h-[85vh] sm:h-[700px] max-h-[85vh] sm:max-h-[700px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
            >
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                    <Image
                      src="/chatbot_logo.png"
                      alt="Keirō"
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <motion.div
                    className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.9, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-[15px] leading-tight">Keirō</h3>
                  <p className="text-gray-500 text-[11px] font-normal">AI Assistant</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:bg-gray-100 rounded-lg p-2 transition-all"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 bg-white">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0 mr-2.5 mt-0.5">
                      <div className="w-7 h-7 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                        <Bot className="w-3.5 h-3.5 text-gray-600" />
                      </div>
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] rounded-lg px-3.5 py-2.5 ${
                      message.sender === 'user'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-50 text-gray-800 border border-gray-200'
                    }`}
                  >
                    {message.sender === 'bot' && (
                      <div className="flex items-center space-x-1.5 mb-1.5">
                        <span className="text-[10px] font-medium text-gray-600 bg-white px-1.5 py-0.5 rounded border border-gray-200">Keirō</span>
                      </div>
                    )}
                      {message.sender === 'bot' && message.text.includes('[COMMUNITY_IMAGE]') && (
                      <div className="mb-2 rounded-md overflow-hidden border border-gray-200">
                        <Image
                          src="/WhatsApp Image 2026-01-06 at 1.07.06 PM.jpeg"
                          alt="StratgenAI Community"
                          width={300}
                          height={200}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    <p
                      className={`text-[13px] whitespace-pre-wrap leading-relaxed ${
                        message.sender === 'user' ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      {message.text.replace('[COMMUNITY_IMAGE]', '')}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="flex-shrink-0 ml-2.5 mt-0.5">
                      <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center">
                        <User className="w-3.5 h-3.5 text-white" />
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
                  <div className="flex-shrink-0 mr-2.5 mt-0.5">
                      <div className="w-7 h-7 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                        <Bot className="w-3.5 h-3.5 text-gray-600" />
                      </div>
                    </div>
                  <div className="bg-gray-50 rounded-lg px-3.5 py-2.5 border border-gray-200">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-medium text-gray-600 bg-white px-1.5 py-0.5 rounded border border-gray-200">Keirō</span>
                      <div className="flex space-x-1.5">
                        <motion.div
                          className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                          animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                          animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-1.5 h-1.5 bg-gray-600 rounded-full"
                          animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Lead Capture Form */}
              {showLeadForm && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-200"
                >
                  <form onSubmit={handleLeadSubmit} className="space-y-3">
                    <p className="text-sm font-heading font-semibold text-gray-700 mb-3">
                      To provide you with the best solution, may I have:
                    </p>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={leadData.name}
                      onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={leadData.email}
                      onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Phone (optional)"
                      value={leadData.phone}
                      onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-heading font-semibold text-sm hover:shadow-lg transition-all"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowLeadForm(false)}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-heading font-semibold text-sm hover:bg-gray-300 transition-all"
                      >
                        Skip
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Buttons */}
            {messages.length > 1 && lastResponse?.followUp && (
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-1.5">
                  {lastResponse.followUp.slice(0, 3).map((q, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => {
                        setInput(q)
                        setTimeout(() => handleSend(), 100)
                      }}
                      className="text-[11px] px-3 py-1.5 bg-white rounded-md border border-gray-300 hover:border-gray-900 hover:text-gray-900 hover:bg-gray-100 transition-all font-medium text-gray-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {q}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Questions - Show only on first message */}
            {messages.length === 1 && (
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
                <p className="text-[11px] text-gray-600 mb-2.5 font-medium flex items-center space-x-1.5">
                  <Sparkles className="w-3 h-3 text-gray-600" />
                  <span>Quick questions:</span>
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {quickQuestions.map((q, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => {
                        setInput(q)
                        setTimeout(() => handleSend(), 100)
                      }}
                      className="text-[11px] px-3 py-1.5 bg-white rounded-md border border-gray-300 hover:border-gray-900 hover:text-gray-900 hover:bg-gray-100 transition-all font-medium text-gray-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {q}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="px-5 py-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2.5">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 text-[13px] bg-white transition-all"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-800 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}