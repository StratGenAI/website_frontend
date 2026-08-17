export type ProductVisual = 'image' | 'biocopilot'

export interface Product {
  id: number
  name: string
  logo?: string
  visual: ProductVisual
  status?: 'live' | 'early-access'
  tagline: string
  intro: string
  modalDescription: string
  features: string[]
  capabilityPills?: string[]
  disclaimer?: string
  gradient: string
  bgColor: string
  ctaLabel?: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Keirō',
    logo: '/single_s.png',
    visual: 'image',
    status: 'live',
    tagline: 'Intelligent Conversations, Anytime',
    intro:
      'Transform your customer experience with our intelligent conversational AI chatbot. Enhance customer service, automate support, and engage users 24/7 with context-aware, human-like responses.',
    modalDescription:
      'Keirō is StratgenAI’s conversational AI for customer engagement, support automation, and multi-language business communication.',
    features: [
      'Natural Language Processing',
      'Multi-language Support',
      'Customizable Workflows',
      'Analytics & Insights',
      'Easy Integration',
    ],
    gradient: 'from-blue-500 to-purple-500',
    bgColor: 'blue',
    ctaLabel: 'Explore More',
  },
  {
    id: 2,
    name: 'BioCopilot AI',
    visual: 'biocopilot',
    status: 'early-access',
    tagline: 'From Weeks of Analysis to Minutes of Insight',
    intro:
      'A premium AI research assistant for genomics, microbiome, metagenomics, and multi-omics teams. Turn QIIME2, Kraken, Bracken, and DESeq2 outputs into publication-ready summaries, figures, reports, and manuscript drafts — in a workspace that feels like ChatGPT meets Benchling.',
    modalDescription:
      'BioCopilot AI accelerates scientific interpretation and reporting for researchers. It supports project workspaces, intelligent file upload, RAG-based dataset chat, figure studio exports (SVG/PNG/TIFF), report builder, manuscript copilot, and reviewer response assistance. For research use only — not for clinical diagnosis or medical advice.',
    features: [
      'Project Workspace & Collaboration',
      'AI Interpretation Engine',
      'Evidence-Based Dataset Chat',
      'Publication Figure Studio',
      'Report & Manuscript Copilot',
      'Reviewer Response Assistant',
    ],
    capabilityPills: [
      'QIIME2',
      'Kraken / Bracken',
      'DESeq2',
      'RNA-seq',
      'Multi-omics',
    ],
    disclaimer: 'For research use only — not a clinical diagnostic tool.',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    bgColor: 'purple',
    ctaLabel: 'Join Early Access',
  },
]
