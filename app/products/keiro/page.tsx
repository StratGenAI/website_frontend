import ProductPageLayout from '@/components/products/ProductPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keirō — AI Chatbot',
  description: 'Intelligent conversational AI for customer engagement, support automation, and multi-language business communication.',
}

export default function KeiroProductPage() {
  return <ProductPageLayout productId={1} />
}
