import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'StratgenAI - AI Solutions for Your Business | Intelligent Automation',
    template: '%s | StratgenAI'
  },
  description: 'Transform your business with cutting-edge AI software solutions. We help businesses automate processes, enhance productivity, and drive innovation. Specializing in AI chatbots, machine learning, and intelligent automation.',
  keywords: ['AI solutions', 'artificial intelligence', 'machine learning', 'AI chatbot', 'business automation', 'AI consulting', 'StratgenAI', 'Keirō', 'Stratflow', 'AI software', 'digital transformation', 'AI maturity model'],
  authors: [{ name: 'StratgenAI' }],
  creator: 'StratgenAI',
  publisher: 'StratgenAI',
  applicationName: 'StratgenAI',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://stratgenai.in'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/single_s.png',
    shortcut: '/single_s.png',
    apple: '/single_s.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stratgenai.in',
    title: 'StratgenAI - AI Solutions for Your Business | Intelligent Automation',
    description: 'Transform your business with cutting-edge AI software solutions. We help businesses automate processes, enhance productivity, and drive innovation.',
    siteName: 'StratgenAI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'StratgenAI - AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StratgenAI - AI Solutions for Your Business',
    description: 'Transform your business with cutting-edge AI software solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
}

