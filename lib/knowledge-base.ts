// Comprehensive Knowledge Base for StratgenAI RAG System

export interface KnowledgeItem {
  id: string
  category: string
  title: string
  content: string
  keywords: string[]
  relatedTopics: string[]
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    id: 'company-overview',
    category: 'company',
    title: 'About StratgenAI',
    content: `StratgenAI is a cutting-edge AI software company specializing in intelligent business solutions. We help businesses automate processes with AI, enhance productivity, and drive innovation. Our tagline is "From Silent Gen to Gen Alpha - AI that speaks your language". We are based in Ahmedabad, India.`,
    keywords: ['stratgenai', 'company', 'about', 'overview', 'what is', 'kya hai', 'company kya', 'company about'],
    relatedTopics: ['founders', 'services', 'products', 'location']
  },
  {
    id: 'founders',
    category: 'founders',
    title: 'Founders of StratgenAI',
    content: `StratgenAI was founded by three passionate co-founders:
1. Krisha Patel - Dimension of Intelligence: Visionary leader with deep AI/ML expertise
2. Niyanta Meswaniya - Creative Lens: Creative force behind brand and communications  
3. Sheefa Memon - Growth Lens: Focused on growth, strategy, and scaling

Together, they bring technical expertise, creative vision, and business acumen to transform businesses with AI.`,
    keywords: ['founders', 'founder', 'who started', 'who created', 'who made', 'who built', 'kisne banayi', 'kisne banaya', 'founder kaun', 'founders kaun'],
    relatedTopics: ['company', 'team', 'leadership']
  },
  {
    id: 'services',
    category: 'services',
    title: 'Services Offered by StratgenAI',
    content: `StratgenAI provides comprehensive AI solutions including:
- Custom AI Development: Tailored AI solutions for your business needs
- AI Consulting & Strategy: Strategic guidance for AI implementation
- Machine Learning Solutions: Advanced ML models and algorithms
- Natural Language Processing: NLP solutions for text analysis and chatbots
- Computer Vision Solutions: Image and video analysis capabilities
- AI Integration Services: Seamless integration with existing systems
- Data Analytics & Insights: Data-driven decision making solutions
- Stock Market Prediction: AI-powered stock market forecasting and prediction models for informed investment decisions

We help businesses across various industries transform their operations with intelligent automation.`,
    keywords: ['services', 'service', 'what services', 'kya services', 'services kya', 'company services', 'stratgenai services', 'what do you provide', 'kya provide', 'capabilities'],
    relatedTopics: ['products', 'industries', 'solutions']
  },
  {
    id: 'products-keiro',
    category: 'products',
    title: 'Keirō - AI Chatbot',
    content: `Keirō is our intelligent conversational AI chatbot product. Key features:
- Natural Language Processing for understanding context
- Multi-language Support (English, Hindi, Hinglish)
- Customizable Workflows tailored to your business
- Analytics & Insights for performance tracking
- Easy Integration with existing systems

Keirō helps businesses automate customer support, enhance user engagement, and provide 24/7 intelligent assistance.`,
    keywords: ['keiro', 'keirō', 'chatbot', 'ai chatbot', 'conversational ai', 'chat bot'],
    relatedTopics: ['products', 'stratflow', 'ai solutions']
  },
  {
    id: 'products-stratflow',
    category: 'products',
    title: 'Stratflow - Fashion AI Platform',
    content: `Stratflow is our AI-driven fashion marketing platform. Features include:
- Trend Analysis & Prediction for fashion trends
- Personalized Recommendations for customers
- Campaign Optimization for marketing
- Customer Segmentation for targeted marketing
- Real-time Analytics for performance tracking

Designed specifically for the fashion industry to boost sales with intelligent, data-driven insights.`,
    keywords: ['stratflow', 'fashion ai', 'fashion platform', 'fashion marketing'],
    relatedTopics: ['products', 'keiro', 'ai solutions']
  },
  {
    id: 'contact-info',
    category: 'contact',
    title: 'Contact Information',
    content: `You can reach StratgenAI at:
- Email: hello@stratgenai.in
- Location: Ahmedabad, India

We're available for consultations, demos, and inquiries. Feel free to reach out to discuss how we can help transform your business with AI.`,
    keywords: ['contact', 'email', 'phone', 'address', 'location', 'how to contact', 'kaise contact', 'reach out', 'get in touch'],
    relatedTopics: ['demo', 'consultation', 'support']
  },
  {
    id: 'industries',
    category: 'industries',
    title: 'Industries We Serve',
    content: `StratgenAI serves multiple industries including:
- Healthcare: AI-powered solutions for hospitals, clinics, and healthcare providers
- Retail & E-commerce: Transform retail operations with intelligent automation
- Fintech: Secure and innovative financial technology solutions
- Manufacturing: AI-driven manufacturing optimization
- Education: Educational technology solutions
- And many more industries seeking AI transformation

We customize our solutions to meet the unique needs of each industry.`,
    keywords: ['industries', 'industry', 'sectors', 'clients', 'customers', 'which industries', 'kaun se industry', 'kis industry'],
    relatedTopics: ['services', 'solutions', 'use cases']
  },
  {
    id: 'expertise',
    category: 'expertise',
    title: 'Areas of Expertise',
    content: `StratgenAI specializes in:
- Artificial Intelligence & Machine Learning
- Natural Language Processing
- Computer Vision
- Data Science & Analytics
- Cloud Computing & DevOps
- AI Strategy & Consulting
- Custom Software Development

Our team has deep expertise across these domains to deliver cutting-edge solutions.`,
    keywords: ['expertise', 'skills', 'capabilities', 'what skills', 'kya skills', 'area of expertise', 'expertise areas'],
    relatedTopics: ['services', 'technologies', 'solutions']
  },
  {
    id: 'technologies',
    category: 'technologies',
    title: 'Technologies We Use',
    content: `StratgenAI uses modern technologies including:
- Programming Languages: Python, JavaScript, TypeScript, Java
- AI/ML Frameworks: TensorFlow, PyTorch, Scikit-learn
- Cloud Platforms: AWS, Azure, GCP
- Databases: PostgreSQL, MongoDB, Redis
- Frontend: React, Next.js, TypeScript
- Backend: Node.js, Python (FastAPI, Django)
- DevOps: Docker, Kubernetes, CI/CD pipelines

We stay updated with the latest technologies to deliver best-in-class solutions.`,
    keywords: ['technologies', 'technology', 'tech stack', 'what technologies', 'kon si technology', 'kya technology', 'tech use'],
    relatedTopics: ['expertise', 'services', 'development']
  }
]

// Search function for RAG
export function searchKnowledgeBase(query: string, limit: number = 3): KnowledgeItem[] {
  const normalizedQuery = query.toLowerCase().trim()
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 2)
  
  const scoredItems = knowledgeBase.map(item => {
    let score = 0
    
    // Exact keyword match
    const itemText = `${item.title} ${item.content} ${item.keywords.join(' ')}`.toLowerCase()
    queryWords.forEach(word => {
      if (itemText.includes(word)) {
        score += 2
      }
      // Check keywords array
      if (item.keywords.some(kw => kw.toLowerCase().includes(word) || word.includes(kw.toLowerCase()))) {
        score += 3
      }
    })
    
    // Category match
    if (normalizedQuery.includes(item.category)) {
      score += 1
    }
    
    return { item, score }
  })
  
  // Sort by score and return top results
  return scoredItems
    .sort((a, b) => b.score - a.score)
    .filter(result => result.score > 0)
    .slice(0, limit)
    .map(result => result.item)
}

