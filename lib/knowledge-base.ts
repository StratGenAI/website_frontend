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
    content: `StratgenAI is a cutting-edge AI software company specializing in intelligent business solutions. We help businesses automate processes with AI, enhance productivity, and drive innovation. Our tagline is "From Silent Gen to Gen Alpha - AI that speaks your language". We are based at Universal Vila, Patel vaas, danilimda gam, Ahmedabad-380028, India.`,
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
    relatedTopics: ['products', 'biocopilot', 'ai solutions']
  },
  {
    id: 'products-biocopilot',
    category: 'products',
    title: 'BioCopilot AI - Research Assistant',
    content: `BioCopilot AI is StratgenAI's premium SaaS research assistant for genomics, microbiome, metagenomics, transcriptomics, and multi-omics researchers. It helps teams interpret QIIME2, Kraken, Bracken, and DESeq2 outputs; generate publication-quality figures and reports; draft manuscripts; and respond to reviewers — reducing weeks of work to minutes. Features include project workspaces, intelligent data upload, RAG-based dataset chat, figure studio, report builder, and manuscript copilot. For research use only — not for clinical diagnosis, treatment recommendations, or medical advice.`,
    keywords: ['biocopilot', 'bio copilot', 'genomics', 'microbiome', 'metagenomics', 'qiime2', 'kraken', 'research ai', 'bioinformatics'],
    relatedTopics: ['products', 'keiro', 'ai solutions']
  },
  {
    id: 'contact-info',
    category: 'contact',
    title: 'Contact Information',
    content: `You can reach StratgenAI at:
- Email: hello@stratgenai.in
- Address: Universal Vila, Patel vaas, danilimda gam, Ahmedabad-380028

We're available for consultations, demos, and inquiries. Feel free to reach out to discuss how we can help transform your business with AI.`,
    keywords: ['contact', 'email', 'phone', 'address', 'location', 'how to contact', 'kaise contact', 'reach out', 'get in touch', 'danilimda', 'ahmedabad'],
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
  },
  {
    id: 'pricing',
    category: 'pricing',
    title: 'Pricing Information',
    content: `StratgenAI pricing is custom based on your needs (products, integrations, users, and support level). We offer free consultation and tailored quotes. Keirō and BioCopilot have flexible plans — contact hello@stratgenai.in or request a demo for exact pricing. We also offer a free 14-day trial for eligible products.`,
    keywords: ['pricing', 'price', 'cost', 'how much', 'kitna', 'paisa', 'budget', 'fee', 'plans', 'quote'],
    relatedTopics: ['demo', 'contact', 'products']
  },
  {
    id: 'demo-trial',
    category: 'demo',
    title: 'Demo and Free Trial',
    content: `Yes — you can request a product demo or free trial. Options: watch a short demo, book a live demo call, or start a free 14-day trial (where available). Share your name and email in the chatbot or on the contact form, or email hello@stratgenai.in.`,
    keywords: ['demo', 'trial', 'free trial', 'live demo', 'preview', 'try', 'dikhao'],
    relatedTopics: ['products', 'contact', 'pricing']
  },
  {
    id: 'support',
    category: 'support',
    title: 'Customer Support',
    content: `StratgenAI provides technical support, documentation, and guidance for clients. Reach us at hello@stratgenai.in for support questions. For product demos and onboarding help, request a session via the website forms or chatbot.`,
    keywords: ['support', 'help', 'technical support', 'customer support', 'madad', 'issue'],
    relatedTopics: ['contact', 'demo']
  },
  {
    id: 'community',
    category: 'community',
    title: 'StratgenAI Community',
    content: `StratgenAI has a community for AI enthusiasts, developers, and business leaders to share insights, collaborate, and hear product updates. To join, contact hello@stratgenai.in or ask via the website chatbot.`,
    keywords: ['community', 'join community', 'network', 'group'],
    relatedTopics: ['contact', 'company']
  }
]

// Search function for RAG
export function searchKnowledgeBase(query: string, limit: number = 3): KnowledgeItem[] {
  const normalizedQuery = query.toLowerCase().trim()
  const stopWords = new Set(['the', 'and', 'for', 'are', 'you', 'what', 'how', 'can', 'please', 'tell', 'me', 'about', 'your', 'with', 'from', 'this', 'that', 'have', 'do'])
  const queryWords = normalizedQuery
    .split(/\s+/)
    .map(w => w.replace(/[^a-z0-9āōūīē]/g, ''))
    .filter(w => w.length >= 2 && !stopWords.has(w))

  const scoredItems = knowledgeBase.map(item => {
    let score = 0
    const title = item.title.toLowerCase()
    const content = item.content.toLowerCase()
    const keywords = item.keywords.map(k => k.toLowerCase())

    // Full-phrase keyword hit is strongest
    keywords.forEach(kw => {
      if (kw.length >= 3 && normalizedQuery.includes(kw)) score += 8
    })

    queryWords.forEach(word => {
      if (title.includes(word)) score += 4
      if (keywords.some(kw => kw === word || kw.includes(word) || word.includes(kw))) score += 5
      if (content.includes(word)) score += 1
    })

    if (normalizedQuery.includes(item.category)) score += 2

    return { item, score }
  })

  return scoredItems
    .sort((a, b) => b.score - a.score)
    .filter(result => result.score >= 4)
    .slice(0, limit)
    .map(result => result.item)
}

