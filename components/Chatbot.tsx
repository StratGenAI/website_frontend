'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, Sparkles, User } from 'lucide-react'
import Image from 'next/image'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface IntentResponse {
  text: string
  followUp?: string[]
  requiresLead?: boolean
}

interface Intent {
  id: string
  description: string
  examples: string[]
  confidenceThreshold: number
  response: (context: ConversationContext) => IntentResponse
}

interface ConversationContext {
  activeIntent: string | null
  intentHistory: string[]
  entities: {
    product?: 'Keiro' | 'Stratflow'
    interest?: 'demo' | 'pricing'
  }
  unclearAttempts: number
  userName: string | null
  userEmail: string | null
  userPhone: string | null
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
    activeIntent: null,
    intentHistory: [],
    entities: {},
    unclearAttempts: 0,
    userName: null,
    userEmail: null,
    userPhone: null,
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

  // ========== INTENT-BASED NLP ENGINE ==========
  
  // Stopwords for normalization
  const stopwords = new Set([
    'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
    'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should',
    'could', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those',
    'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them',
    'to', 'of', 'in', 'on', 'at', 'for', 'with', 'by', 'from', 'about', 'into',
    'ka', 'ki', 'ke', 'ko', 'se', 'mein', 'par', 'kaun', 'kya', 'kab', 'kahan'
  ])

  // Sentence normalization
  const normalizeSentence = (text: string): string[] => {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 1 && !stopwords.has(word))
  }

  // Semantic similarity using word overlap and position
  const calculateSemanticSimilarity = (input: string, examples: string[]): number => {
    const inputWords = normalizeSentence(input)
    if (inputWords.length === 0) return 0

    let maxSimilarity = 0
    for (const example of examples) {
      const exampleWords = normalizeSentence(example)
      const commonWords = inputWords.filter(w => exampleWords.includes(w))
      const similarity = commonWords.length / Math.max(inputWords.length, exampleWords.length)
      maxSimilarity = Math.max(maxSimilarity, similarity)
    }
    return maxSimilarity
  }

  // Intent Registry
  const intents: Intent[] = [
    {
      id: 'GREETING',
      description: 'User greets the chatbot',
      examples: [
        'hi', 'hello', 'hey', 'namaste', 'namaskar', 'kaise ho', 'kya haal', 'hey there',
        'good morning', 'good afternoon', 'good evening'
      ],
      confidenceThreshold: 0.6,
      response: () => ({
        text: "Hello! 👋 Great to meet you! I'm Keirō, your friendly AI assistant. How can I help you learn about StratgenAI today?",
        followUp: ['Tell me about products', 'What services do you offer?', 'How can I contact you?']
      })
    },
    {
      id: 'COMPANY_INFO',
      description: 'User asks about the company',
      examples: [
        'what is your company', 'company ke bare mein batao', 'about your company',
        'tell me about yourself', 'tell me about stratgenai', 'stratgenai ke bare mein batao',
        'aap kya karte ho', 'aapki company kya karti hai', 'stratgenai kya hai',
        'company about', 'company info', 'about stratgenai',
        'stratgenai ke bare me info chahiye', 'mujhe stratgenai ke bare me information chahiye',
        'stratgenai ki jankari', 'company ki jankari', 'stratgenai kya karta hai',
        'company kya hai', 'stratgenai company kya hai', 'tell me about stratgenai company',
        'stratgenai ke bare me batao', 'company ke bare me batao', 'stratgenai information'
      ],
      confidenceThreshold: 0.7,
      response: () => ({
        text: "We are **StratgenAI**, a cutting-edge AI software company specializing in intelligent business solutions.\n\nWe help businesses:\n• Automate processes with AI\n• Enhance productivity\n• Drive innovation\n\nWould you like to know about our products or services?",
        followUp: ['Tell me about products', 'What services do you offer?', 'Who are the founders?']
      })
    },
    {
      id: 'PRODUCT_INFO',
      description: 'User asks about products',
      examples: [
        'what products do you have', 'aapke products kya hai', 'products batao',
        'what do you sell', 'kya kya milta hai', 'product list', 'keiro kya hai',
        'stratflow kya hai', 'products kya hai', 'what are your products',
        'products list', 'kya products hai', 'aap kya bechte ho', 'offerings kya hai', 'solutions kya hai'
      ],
      confidenceThreshold: 0.7,
      response: () => ({
        text: "We offer **2 main products**:\n\n1. **Keirō** 🤖\n   Intelligent conversational AI chatbot\n   • Natural Language Processing\n   • Multi-language Support\n   • Customizable Workflows\n   • Analytics & Insights\n   • Easy Integration\n\n2. **Stratflow** 👗\n   AI-driven fashion marketing platform\n   • Trend Analysis & Prediction\n   • Personalized Recommendations\n   • Campaign Optimization\n   • Customer Segmentation\n   • Real-time Analytics\n\nWhich one interests you more?",
        followUp: ['Tell me about Keirō', 'Tell me about Stratflow', 'How can I contact you?']
      })
    },
    {
      id: 'CONTACT',
      description: 'User asks for contact information',
      examples: [
        'how to contact you', 'contact details', 'phone number', 'email address',
        'tumse kaise baat kare', 'contact kaise kare', 'reach out kaise',
        'email kya hai', 'phone kya hai', 'contact number', 'phone number kya hai',
        'email id', 'address kya hai', 'location kya hai', 'kaise contact kare',
        'get in touch', 'connect karna hai'
      ],
      confidenceThreshold: 0.7,
      response: () => ({
        text: "You can reach us at:\n\n📧 **Email**: hello@stratgenai.in\n📍 **Location**: Ahmedabad, India\n\nWould you like to:\n• Schedule a call\n• Send us an email\n• Get WhatsApp contact",
        followUp: ['Schedule a call', 'Send email', 'WhatsApp us']
      })
    },
    {
      id: 'DEMO_REQUEST',
      description: 'User requests a demo',
      examples: [
        'can i see a demo', 'demo dikhao', 'product demo', 'free trial',
        'test kar sakte hai', 'try karna hai', 'demo chahiye', 'trial'
      ],
      confidenceThreshold: 0.7,
      response: () => ({
        text: "Absolutely! 🎉\n\nWe offer a **free 14-day trial** with full features!\n\nWould you like to:\n1. Watch a 5-minute demo video\n2. Schedule a live demo call\n3. Start free trial now\n\nWhich option works for you?",
        followUp: ['Watch demo video', 'Schedule live demo', 'Start free trial'],
        requiresLead: true
      })
    },
    {
      id: 'SERVICE_INFO',
      description: 'User asks about services',
      examples: [
        'what services do you offer', 'services kya hai', 'kya services milti hai',
        'what can you do', 'capabilities kya hai', 'what services', 'services list',
        'kya services hai', 'aap kya services dete ho', 'what do you provide', 'kya provide karte ho',
        'company ki kya services hai', 'stratgenai kya service deta hai', 'stratgenai services',
        'company services kya hai', 'stratgenai kya services deta hai', 'company kya service deti hai',
        'stratgenai service', 'company service', 'what services does stratgenai provide',
        'stratgenai kya offer karta hai', 'company kya offer karti hai',
        'tell me about AI Consulting', 'AI Consulting', 'consulting services', 'AI consultant',
        'what consulting do you offer', 'do you provide consulting'
      ],
      confidenceThreshold: 0.7,
      response: () => ({
        text: "We provide comprehensive **AI solutions**:\n\n✅ Custom AI Development\n✅ AI Consulting & Strategy\n✅ Machine Learning Solutions\n✅ Natural Language Processing\n✅ Computer Vision Solutions\n✅ AI Integration Services\n✅ Data Analytics & Insights\n✅ Stock Market Prediction & Forecasting\n\nWhich service interests you?",
        followUp: ['Tell me about AI Consulting', 'Custom Development', 'Integration Services']
      })
    },
    {
      id: 'FOUNDERS',
      description: 'User asks about founders',
      examples: [
        'who are the founders', 'founders kaun hai', 'founder kya hai',
        'founder ke bare mein', 'who started', 'founder info', 'founders ke bare mein',
        'founder kaun hai', 'who created', 'who made', 'who built', 'founder team', 'founders list',
        'kisne banayi ye company', 'kisne banaya company', 'company kisne banayi',
        'stratgenai kisne banaya', 'stratgenai kisne banayi', 'kisne start kiya',
        'who founded stratgenai', 'who created stratgenai', 'company owner kaun hai',
        'company ke founder kaun hai', 'founders kaun hai company ke'
      ],
      confidenceThreshold: 0.7,
      response: () => ({
        text: "StratgenAI was founded by **three passionate co-founders**:\n\n👤 **Krisha Patel** - Dimension of Intelligence\nVisionary leader with deep AI/ML expertise\n\n👤 **Niyanta Meswaniya** - Creative Lens\nCreative force behind brand and communications\n\n👤 **Sheefa Memon** - Growth Lens\nFocused on growth, strategy, and scaling\n\nTogether, they bring technical expertise, creative vision, and business acumen!",
        followUp: ['Tell me about company', 'What products do you have?']
      })
    },
    {
      id: 'INDUSTRIES',
      description: 'User asks about industries served',
      examples: [
        'which industries do you serve', 'kaun se industry ke liye', 'sectors kya hai',
        'kis field mein kaam karte ho', 'industries', 'what industries', 'industries list',
        'kaun se industries', 'clients kya hai', 'customers kya hai', 'kis industry ke liye'
      ],
      confidenceThreshold: 0.7,
      response: () => ({
        text: "We serve multiple industries:\n\n🏪 E-commerce & Retail\n🏥 Healthcare\n🏦 Banking & Finance\n📚 Education\n🏭 Manufacturing\n🍔 Food & Hospitality\n🏠 Real Estate\n\nWhich industry are you from?",
        followUp: ['E-commerce solutions', 'Healthcare use cases', 'Tell me more']
      })
    },
    {
      id: 'SUPPORT',
      description: 'User asks about support',
      examples: [
        'customer support kaise hai', 'help milegi kya', 'support available hai', 'technical support'
      ],
      confidenceThreshold: 0.7,
      response: () => ({
        text: "We provide comprehensive support:\n\n🎯 24/7 Technical Support\n📚 Detailed Documentation\n💬 Dedicated Account Manager\n🎓 Training Sessions\n⚡ <2 hour response time\n\nOur team is always here to help!",
        followUp: ['Talk to support now', 'View documentation']
      })
    },
    {
      id: 'COMMUNITY',
      description: 'User asks about community',
      examples: [
        'community kya hai', 'stratgenai community', 'community ke bare mein',
        'join community', 'community join kaise kare', 'community details', 'community info',
        'community join karna hai', 'community mein kaise aaye', 'community group', 'community network'
      ],
      confidenceThreshold: 0.7,
      response: () => ({
        text: "Welcome to **StratgenAI Community**! 🌟\n\n[COMMUNITY_IMAGE]\n\nWe have an active community of AI enthusiasts, developers, and business leaders who:\n\n✨ Share knowledge and insights\n✨ Collaborate on projects\n✨ Get early access to new features\n✨ Network with like-minded professionals\n✨ Learn from experts\n\nWould you like to join our community? Connect with us and become part of the StratgenAI family!",
        followUp: ['How to join community?', 'Contact us', 'More about community']
      })
    },
    {
      id: 'AREA_OF_EXPERTISE',
      description: 'User asks about area of expertise or skills',
      examples: [
        'area of expertise', 'expertise kya hai', 'skills kya hai', 'aapki expertise',
        'kya skills hai', 'what skills', 'what expertise', 'aap kya jante ho',
        'technologies kon si', 'kon si technologies', 'tech stack', 'skills list',
        'expertise areas', 'what are your skills', 'aapki skills', 'kya aap jante ho'
      ],
      confidenceThreshold: 0.6,
      response: () => ({
        text: "Our **Areas of Expertise** include:\n\n🤖 **AI & ML**:\n• Artificial Intelligence\n• Machine Learning\n• Deep Learning\n• Natural Language Processing\n• Computer Vision\n\n💻 **Development**:\n• Full-stack Web Development\n• API Development\n• Cloud Solutions\n• DevOps & MLOps\n\n📊 **Data Science**:\n• Data Analytics\n• Big Data Processing\n• Business Intelligence\n\nFor detailed information, visit our **Area of Expertise** page!",
        followUp: ['Tell me about technologies', 'What services do you offer?', 'Contact us']
      })
    },
    {
      id: 'TECHNOLOGIES',
      description: 'User asks about technologies used',
      examples: [
        'technologies', 'technology', 'tech stack', 'kon si technology use karte ho',
        'what technologies', 'kya technologies', 'tech kya hai', 'technologies list',
        'which technologies', 'aap kon si technology use karte ho', 'tech stack kya hai',
        'frontend technologies', 'backend technologies', 'database technologies'
      ],
      confidenceThreshold: 0.6,
      response: () => ({
        text: "We use modern **technologies** across the stack:\n\n**Frontend**:\n• React, Next.js, TypeScript\n• Tailwind CSS\n\n**Backend**:\n• Python, Node.js, FastAPI\n• REST APIs\n\n**Databases**:\n• PostgreSQL, MySQL, MongoDB\n• Vector DBs (Pinecone, Weaviate)\n\n**Cloud & DevOps**:\n• AWS, Azure, GCP\n• Docker, CI/CD\n\nFor complete details, visit our **Technologies** page!",
        followUp: ['Tell me about area of expertise', 'What services do you offer?', 'Contact us']
      })
    },
    {
      id: 'PRICING_REQUEST',
      description: 'User asks about pricing',
      examples: [
        'price', 'pricing', 'cost', 'charge', 'kitna', 'paisa', 'budget', 'fee', 'rate', 'plan', 'plans', 'kitne', 'kitna paisa', 'how much'
      ],
      confidenceThreshold: 0.7,
      response: () => ({
        text: "You can reach us at:\n\n📧 **Email**: hello@stratgenai.in\n📍 **Location**: Ahmedabad, India\n\nFor pricing details, please contact us and we'll provide a customized quote based on your needs!",
        followUp: ['Schedule a call', 'Send email', 'WhatsApp us']
      })
    },
    {
      id: 'GOODBYE',
      description: 'User says goodbye or thanks',
      examples: [
        'thanks', 'thank you', 'bye', 'shukriya', 'dhanyawad', 'thanku', 'thankyou', 'thx', 'goodbye', 'see you'
      ],
      confidenceThreshold: 0.6,
      response: () => ({
        text: "You're welcome! 😊\n\nIf you need anything else, I'm always here to help.\n\nWould you like to:\n• Talk to our sales team\n• Get updates on WhatsApp\n• Explore our website\n\nHave a great day! 🌟"
      })
    },
    {
      id: 'UNKNOWN',
      description: 'Unknown or unclear intent',
      examples: [],
      confidenceThreshold: 0,
      response: (ctx) => {
        if (ctx.unclearAttempts >= 2) {
          return {
            text: "I'd like to connect you with our team for better assistance! 💬\n\nWould you like to:\n• Chat with human agent\n• Schedule a callback\n• Send email to support\n\n📧 Email: hello@stratgenai.in",
            followUp: ['Schedule a call', 'Send email']
          }
        }
        return {
          text: "I'm not sure I understood that correctly. Could you rephrase your question? 🤔\n\nYou can ask me about:\n• Our products and services\n• Demo or free trial\n• Contact information\n• Implementation process\n• Founders\n• Industries we serve\n\nOr try asking in Hindi/Hinglish - I understand! 😊",
          followUp: ['Tell me about products', 'What services do you offer?', 'How to contact?']
        }
      }
    }
  ]

  // Detect intent from user input with comprehensive keyword override for ALL intents
  const detectIntent = (input: string): { intent: Intent; confidence: number } | null => {
    const normalizedInput = input.toLowerCase().trim().replace(/\s+/g, ' ') // Normalize spaces
    const normalizedNoSpace = normalizedInput.replace(/\s+/g, '') // Also check without spaces for "kis ne" -> "kisne"

    // ========== RULE 1: Handle Follow-up Context FIRST ==========
    if (
      (normalizedInput.includes('tell me more') || 
       normalizedInput.includes('more about') || 
       normalizedInput.includes('explain') || 
       normalizedInput.includes('continue')) && 
      context.activeIntent
    ) {
      const activeIntentObj = intents.find(i => i.id === context.activeIntent)
      if (activeIntentObj) {
        return { intent: activeIntentObj, confidence: 0.9 }
      }
    }

    // ========== RULE 2: Comprehensive Keyword Override (ALL INTENTS) ==========
    
    // GREETING - Check early (more lenient)
    if (
      normalizedInput === 'hi' || normalizedInput === 'hello' || normalizedInput === 'hey' ||
      normalizedInput === 'hii' || normalizedInput === 'helloo' || normalizedInput === 'heyy' ||
      normalizedInput.startsWith('hi ') || normalizedInput.startsWith('hello ') ||
      normalizedInput.includes('namaste') || normalizedInput.includes('namaskar') ||
      normalizedInput.includes('kaise ho') || normalizedInput.includes('kya haal') ||
      normalizedInput.includes('good morning') || normalizedInput.includes('good afternoon') ||
      normalizedInput.includes('good evening') || normalizedInput.includes('gm') ||
      normalizedInput.includes('hey there') || normalizedInput.length <= 5 && (
        normalizedInput.includes('h') && normalizedInput.includes('i') ||
        normalizedInput.includes('h') && normalizedInput.includes('e') && normalizedInput.includes('l')
      )
    ) {
      const greetingIntent = intents.find(i => i.id === 'GREETING')
      if (greetingIntent) return { intent: greetingIntent, confidence: 0.95 }
    }

    // GOODBYE
    if (
      normalizedInput.includes('thanks') || normalizedInput.includes('thank you') ||
      normalizedInput.includes('bye') || normalizedInput.includes('goodbye') ||
      normalizedInput.includes('shukriya') || normalizedInput.includes('dhanyawad') ||
      normalizedInput.includes('thanku') || normalizedInput.includes('thx') ||
      normalizedInput.includes('see you')
    ) {
      const goodbyeIntent = intents.find(i => i.id === 'GOODBYE')
      if (goodbyeIntent) return { intent: goodbyeIntent, confidence: 0.95 }
    }

    // PRODUCT_INFO - High priority
    if (
      normalizedInput.includes('product') || normalizedInput.includes('products') ||
      normalizedInput.includes('keiro') || normalizedInput.includes('stratflow') ||
      normalizedInput.includes('offerings') || normalizedInput.includes('solutions') ||
      normalizedInput.includes('what do you sell') || normalizedInput.includes('aap kya bechte') ||
      normalizedInput.includes('kya milta hai') || normalizedInput.includes('product list')
    ) {
      const productIntent = intents.find(i => i.id === 'PRODUCT_INFO')
      if (productIntent) return { intent: productIntent, confidence: 0.95 }
    }

    // SERVICE_INFO - Check BEFORE COMPANY_INFO (HIGHEST PRIORITY for service queries)
    const hasService = normalizedInput.includes('service') || normalizedInput.includes('services')
    const hasConsulting = normalizedInput.includes('consulting') || normalizedInput.includes('consultant')
    const hasKya = normalizedInput.includes('kya')
    const hasCompany = normalizedInput.includes('company') || normalizedInput.includes('stratgenai')
    const hasDeta = normalizedInput.includes('deta') || normalizedInput.includes('deti')
    
    // CRITICAL: If query has "consulting", "service", or related keywords, it's ALWAYS service info
    // This catches: "tell me about AI Consulting", "company ki kya kya services hai", "stratgenai kya service deti hai"
    if (hasConsulting || (hasService && (hasKya || hasDeta || hasCompany))) {
      const serviceIntent = intents.find(i => i.id === 'SERVICE_INFO')
      if (serviceIntent) return { intent: serviceIntent, confidence: 0.98 }
    }
    
    if (hasService || hasConsulting ||
        normalizedInput.includes('kya service') || normalizedInput.includes('kya services') || 
        normalizedInput.includes('services kya') || normalizedInput.includes('service kya') ||
        normalizedInput.includes('what can you do') || normalizedInput.includes('capabilities') ||
        normalizedInput.includes('what do you provide') || normalizedInput.includes('kya provide') ||
        normalizedInput.includes('ai consulting') || normalizedInput.includes('ai consultant') ||
        normalizedInput.includes('tell me about') && (hasConsulting || hasService)) {
      const serviceIntent = intents.find(i => i.id === 'SERVICE_INFO')
      if (serviceIntent) return { intent: serviceIntent, confidence: 0.98 }
    }

    // FOUNDERS - Check FIRST before COMPANY_INFO (HIGHEST PRIORITY for "who made/created" queries)
    // Check for "kisne" or "who" patterns FIRST - these are founder queries
    // Handle both "kisne" and "kis ne" (with/without space)
    const hasKisne = normalizedInput.includes('kisne') || normalizedInput.includes('kis ne') || normalizedNoSpace.includes('kisne') || 
                     normalizedInput.includes('kisne banayi') || normalizedInput.includes('kisne banaya') ||
                     normalizedInput.includes('kis ne banayi') || normalizedInput.includes('kis ne banaya')
    const hasWhoMade = normalizedInput.includes('who made') || normalizedInput.includes('who created') || 
                       normalizedInput.includes('who started') || normalizedInput.includes('who built') || 
                       normalizedInput.includes('who founded') || normalizedInput.includes('who established')
    
    // CRITICAL: If query has "kisne" or "who made/created" patterns, it's ALWAYS founders, not company info
    if (hasKisne || hasWhoMade) {
      const foundersIntent = intents.find(i => i.id === 'FOUNDERS')
      if (foundersIntent) return { intent: foundersIntent, confidence: 0.98 }
    }
    
    if (
      normalizedInput.includes('founder') || 
      normalizedInput.includes('founders') ||
      normalizedInput.includes('founder kaun') || 
      normalizedInput.includes('founders kaun') ||
      normalizedInput.includes('founder ke bare') || 
      normalizedInput.includes('founders ke bare') ||
      normalizedInput.includes('company owner') || 
      normalizedInput.includes('company ka owner') ||
      normalizedInput.includes('company ke founder') || 
      normalizedInput.includes('company founders')
    ) {
      const foundersIntent = intents.find(i => i.id === 'FOUNDERS')
      if (foundersIntent) return { intent: foundersIntent, confidence: 0.98 }
    }

    // COMPANY_INFO - Enhanced with more variations (but NOT for founder or service queries)
    // Skip if it's a founder query OR service query
    const isServiceQuery = normalizedInput.includes('service') || normalizedInput.includes('services')
    if (!normalizedInput.includes('kisne') && !normalizedInput.includes('who made') && !normalizedInput.includes('who created') && !normalizedInput.includes('who founded') && !isServiceQuery) {
      if (
        normalizedInput.includes('stratgenai') ||
        (normalizedInput.includes('company') && (normalizedInput.includes('about') || normalizedInput.includes('kya') || normalizedInput.includes('what') || normalizedInput.includes('ke bare') || normalizedInput.includes('ki')) && !isServiceQuery) ||
        normalizedInput.includes('about your company') || normalizedInput.includes('about stratgenai') ||
        normalizedInput.includes('stratgenai ke bare') || normalizedInput.includes('stratgenai ki') ||
        (normalizedInput.includes('stratgenai kya') && !isServiceQuery) || normalizedInput.includes('stratgenai about') ||
        normalizedInput.includes('who are you') || normalizedInput.includes('aap kya karte') ||
        normalizedInput.includes('tell me about yourself') || normalizedInput.includes('company ke bare') ||
        (normalizedInput.includes('company ki') && !isServiceQuery) || (normalizedInput.includes('company kya') && !isServiceQuery) ||
        normalizedInput.includes('info chahiye') || normalizedInput.includes('information chahiye') ||
        normalizedInput.includes('mujhe info') || normalizedInput.includes('mujhe information') ||
        (normalizedInput.includes('batao') && (normalizedInput.includes('company') || normalizedInput.includes('stratgenai')) && !isServiceQuery) ||
        (normalizedInput.includes('bata') && (normalizedInput.includes('company') || normalizedInput.includes('stratgenai')) && !isServiceQuery)
      ) {
        const companyIntent = intents.find(i => i.id === 'COMPANY_INFO')
        if (companyIntent) return { intent: companyIntent, confidence: 0.95 }
      }
    }



    // CONTACT - Very comprehensive (HIGHEST PRIORITY for contact queries)
    if (
      normalizedInput.includes('contact') || normalizedInput.includes('email') ||
      normalizedInput.includes('phone') || normalizedInput.includes('reach') ||
      normalizedInput.includes('connect') || normalizedInput.includes('address') ||
      normalizedInput.includes('location') || normalizedInput.includes('get in touch') ||
      normalizedInput.includes('kaise contact') || normalizedInput.includes('tumse kaise baat') ||
      normalizedInput.includes('contact karna') || normalizedInput.includes('contact kare') ||
      normalizedInput.includes('contact kese') || normalizedInput.includes('contact kaise') ||
      normalizedInput.includes('stratgenai ko contact') || normalizedInput.includes('stratgenai contact') ||
      normalizedInput.includes('contact stratgenai') || normalizedInput.includes('stratgenai se contact') ||
      normalizedInput.includes('whatsapp') || normalizedInput.includes('whats app') ||
      normalizedInput.includes('number') || normalizedInput.includes('phone number') ||
      normalizedInput.includes('email id') || normalizedInput.includes('email address') ||
      normalizedInput.includes('reach out') || normalizedInput.includes('reach karna') ||
      normalizedInput.includes('baat karna') || normalizedInput.includes('baat kare') ||
      normalizedInput.includes('call') || normalizedInput.includes('call karna')
    ) {
      const contactIntent = intents.find(i => i.id === 'CONTACT')
      if (contactIntent) return { intent: contactIntent, confidence: 0.98 }
    }

    // DEMO_REQUEST
    if (
      normalizedInput.includes('demo') || normalizedInput.includes('trial') ||
      normalizedInput.includes('test') || normalizedInput.includes('try') ||
      normalizedInput.includes('dikhao') || normalizedInput.includes('dekh') ||
      normalizedInput.includes('preview') || normalizedInput.includes('sample') ||
      normalizedInput.includes('demo chahiye') || normalizedInput.includes('test kar sakte')
    ) {
      const demoIntent = intents.find(i => i.id === 'DEMO_REQUEST')
      if (demoIntent) return { intent: demoIntent, confidence: 0.95 }
    }

    // PRICING_REQUEST
    if (
      normalizedInput.includes('price') || normalizedInput.includes('pricing') ||
      normalizedInput.includes('cost') || normalizedInput.includes('charge') ||
      normalizedInput.includes('kitna') || normalizedInput.includes('paisa') ||
      normalizedInput.includes('budget') || normalizedInput.includes('fee') ||
      normalizedInput.includes('rate') || normalizedInput.includes('how much') ||
      normalizedInput.includes('plan') || normalizedInput.includes('plans')
    ) {
      const pricingIntent = intents.find(i => i.id === 'PRICING_REQUEST')
      if (pricingIntent) return { intent: pricingIntent, confidence: 0.95 }
    }

    // INDUSTRIES
    if (
      normalizedInput.includes('industry') || normalizedInput.includes('industries') ||
      normalizedInput.includes('sector') || normalizedInput.includes('sectors') ||
      normalizedInput.includes('clients') || normalizedInput.includes('customers') ||
      normalizedInput.includes('kis industry') || normalizedInput.includes('kaun se industry') ||
      normalizedInput.includes('kis field') || normalizedInput.includes('which industries')
    ) {
      const industriesIntent = intents.find(i => i.id === 'INDUSTRIES')
      if (industriesIntent) return { intent: industriesIntent, confidence: 0.95 }
    }

    // SUPPORT
    if (
      normalizedInput.includes('support') || normalizedInput.includes('help') ||
      normalizedInput.includes('assist') || normalizedInput.includes('problem') ||
      normalizedInput.includes('issue') || normalizedInput.includes('madad') ||
      normalizedInput.includes('technical support') || normalizedInput.includes('customer support')
    ) {
      const supportIntent = intents.find(i => i.id === 'SUPPORT')
      if (supportIntent) return { intent: supportIntent, confidence: 0.95 }
    }

    // COMMUNITY
    if (
      normalizedInput.includes('community') || normalizedInput.includes('join community') ||
      normalizedInput.includes('community group') || normalizedInput.includes('community network') ||
      normalizedInput.includes('community join') || normalizedInput.includes('community kya') ||
      normalizedInput.includes('community ke bare') || normalizedInput.includes('community join karna') ||
      normalizedInput.includes('community mein') || normalizedInput.includes('community se') ||
      normalizedInput.includes('community kaise join')
    ) {
      const communityIntent = intents.find(i => i.id === 'COMMUNITY')
      if (communityIntent) return { intent: communityIntent, confidence: 0.95 }
    }

    // AREA_OF_EXPERTISE
    if (
      normalizedInput.includes('area of expertise') || normalizedInput.includes('expertise') ||
      normalizedInput.includes('skills') || normalizedInput.includes('skill') ||
      normalizedInput.includes('aapki expertise') || normalizedInput.includes('kya skills') ||
      normalizedInput.includes('what skills') || normalizedInput.includes('what expertise') ||
      normalizedInput.includes('aap kya jante') || normalizedInput.includes('expertise areas') ||
      normalizedInput.includes('skills list') || normalizedInput.includes('expertise kya')
    ) {
      const expertiseIntent = intents.find(i => i.id === 'AREA_OF_EXPERTISE')
      if (expertiseIntent) return { intent: expertiseIntent, confidence: 0.95 }
    }

    // TECHNOLOGIES
    if (
      normalizedInput.includes('technolog') || normalizedInput.includes('tech stack') ||
      normalizedInput.includes('kon si technology') || normalizedInput.includes('kya technology') ||
      normalizedInput.includes('what technologies') || normalizedInput.includes('which technologies') ||
      normalizedInput.includes('tech kya') || normalizedInput.includes('technologies list') ||
      normalizedInput.includes('tech stack kya') || normalizedInput.includes('aap kon si technology') ||
      normalizedInput.includes('frontend') || normalizedInput.includes('backend') ||
      normalizedInput.includes('database') || normalizedInput.includes('tech use')
    ) {
      const techIntent = intents.find(i => i.id === 'TECHNOLOGIES')
      if (techIntent) return { intent: techIntent, confidence: 0.95 }
    }

    // ========== RULE 3: Semantic Matching with Dynamic Thresholds ==========
    let bestMatch: { intent: Intent; confidence: number } | null = null
    let maxConfidence = 0

    for (const intent of intents) {
      if (intent.id === 'UNKNOWN') continue
      
      const confidence = calculateSemanticSimilarity(input, intent.examples)
      
      // Dynamic threshold: Lower for common intents
      const threshold = 
        intent.id === 'COMPANY_INFO' ? 0.4 :
        intent.id === 'PRODUCT_INFO' ? 0.4 :
        intent.id === 'SERVICE_INFO' ? 0.4 :
        intent.id === 'CONTACT' ? 0.4 :
        intent.id === 'AREA_OF_EXPERTISE' ? 0.4 :
        intent.id === 'TECHNOLOGIES' ? 0.4 :
        intent.id === 'COMMUNITY' ? 0.4 :
        intent.id === 'GREETING' ? 0.3 :
        intent.confidenceThreshold
      
      if (confidence >= threshold && confidence > maxConfidence) {
        maxConfidence = confidence
        bestMatch = { intent, confidence }
      }
    }

    // ========== RULE 4: UNKNOWN is LAST option ==========
    if (!bestMatch) {
      const unknownIntent = intents.find(i => i.id === 'UNKNOWN')
      if (unknownIntent) {
        return { intent: unknownIntent, confidence: 0 }
      }
    }

    return bestMatch
  }

  // AI Fallback using RAG (Retrieval Augmented Generation)
  const generateAIResponse = async (userInput: string, ctx: ConversationContext): Promise<string> => {
    try {
      // Use RAG API route for intelligent responses
      const response = await fetch('/api/chatbot-rag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: userInput,
          context: ctx
        })
      })

      if (response.ok) {
        const data = await response.json()
        if (data.success && data.response) {
          return data.response
        }
      }
    } catch (error) {
      console.error('RAG API error:', error)
    }
    
    // Fallback message
    return "I'm here to help! Could you rephrase your question? I can assist with information about StratgenAI's products, services, founders, and how to contact us."
  }

  // Handle user message with intent-based system
  const handleUserMessage = async (userInput: string): Promise<{ answer: string; followUp?: string[]; requiresLead?: boolean }> => {
    const normalizedInput = userInput.toLowerCase().trim()

    // Detect intent
    const intentResult = detectIntent(userInput)
    
    if (!intentResult) {
      // Fallback to AI or unknown
      const aiResponse = await generateAIResponse(userInput, context)
      setContext(prev => ({ ...prev, unclearAttempts: prev.unclearAttempts + 1 }))
      return {
        answer: aiResponse,
        followUp: ['Tell me about products', 'What services do you offer?', 'How to contact?']
      }
    }

    const { intent, confidence } = intentResult

    // Use RAG fallback if confidence is low or for better understanding
    if (confidence < 0.7 || intent.id === 'UNKNOWN' || context.unclearAttempts >= 1) {
      // Use RAG for intelligent responses with context
      const aiResponse = await generateAIResponse(userInput, context)
      setContext(prev => ({ ...prev, unclearAttempts: prev.unclearAttempts + 1 }))
      return {
        answer: aiResponse,
        followUp: ['Tell me about products', 'What services do you offer?', 'How to contact?']
      }
    }

    // Update context
    setContext(prev => ({
      ...prev,
      activeIntent: intent.id,
      intentHistory: [...prev.intentHistory, intent.id],
      unclearAttempts: 0
    }))

    // Get response from intent
    const response = intent.response(context)
    
    return {
      answer: response.text,
      followUp: response.followUp,
      requiresLead: response.requiresLead
    }
  }

  // Old matching logic removed - using intent-based system above

  const handleSend = async () => {
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
    setTimeout(async () => {
      const response = await handleUserMessage(userInput)
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.answer,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setLastResponse({ followUp: response.followUp })

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
    
    try {
      // Save to Supabase session_requests table
      const { supabase } = await import('@/lib/supabase')
      
      const { error: dbError } = await supabase
        .from('session_requests')
        .insert([
          {
            name: leadData.name,
            email: leadData.email,
            phone: leadData.phone || null,
            company: null,
            session_type: 'demo_request',
            preferred_date: null,
            message: null,
            source: 'chatbot',
            created_at: new Date().toISOString(),
          },
        ])

      if (dbError) {
        console.error('Error saving to Supabase:', dbError)
        // Continue anyway, show success message
      }

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
    } catch (error: any) {
      console.error('Error submitting lead form:', error)
      // Still show success to user
      const successMessage: Message = {
        id: Date.now().toString(),
        text: `Thank you ${leadData.name}! 🙏\n\nWe've received your information. Our team will contact you soon.`,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, successMessage])
      setShowLeadForm(false)
      setLeadData({ name: '', email: '', phone: '' })
    }
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